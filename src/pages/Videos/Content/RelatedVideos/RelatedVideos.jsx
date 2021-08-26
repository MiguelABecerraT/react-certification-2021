import React, { useState } from 'react';
import {
  RelatedSection,
  RelatedBar,
  RelatedBarTxt,
  ScrollDiv,
} from './RelatedVideosCard/RelatedVideos.styled';
import VideoCardRelative from './RelatedVideosCard/RelatedVideos.details';
import { useYoutubeApi } from '../../../../utils/hooks/useYoutubeApi';
import { useContext } from 'react';
import { ThemeContext } from '../../../../providers/Theme/Theme.provider';

function VideosRelatives({ idVideo }) {
  const mode = useContext(ThemeContext);
  const { darkMode } = mode.state;
  const [videoPlayer, setVideoPlayer] = useState(idVideo);

  if (videoPlayer !== idVideo) {
    setVideoPlayer(idVideo);
  }
  const [dataVideos, isLoading] = useYoutubeApi(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&relatedToVideoId=${videoPlayer}&type=video`
  );

  console.log(dataVideos);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <RelatedSection theme={darkMode}>
          <RelatedBar className="RelatedBar" theme={darkMode}>
            <RelatedBarTxt>Related Videos</RelatedBarTxt>
          </RelatedBar>
          <ScrollDiv>
            {dataVideos.items.map((item) => (
              <VideoCardRelative
                key={item.id.videoId}
                id={item.id.videoId}
                urlImage={item.snippet.thumbnails.medium.url}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                published={item.snippet.publishedAt}
                theme={darkMode}
              />
            ))}
          </ScrollDiv>
        </RelatedSection>
      )}
    </div>
  );
}

export default VideosRelatives;
