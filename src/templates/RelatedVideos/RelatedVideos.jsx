import React, { useState } from 'react';
import {
  RelatedSection,
  RelatedBar,
  RelatedBarTxt,
  ScrollDiv,
} from '../RelatedVideosCard/RelatedVideos.styled';
import RelatedVideosCard from '../RelatedVideosCard/RelatedVideos.details';
import { useYoutubeApi } from '../../utils/hooks/useYoutubeApi';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/Theme/Theme.provider';

function RelatedVideos({ idVideo, title }) {
  const themeContext = useContext(ThemeContext);
  const { mode } = themeContext.state;
  const [videoPlayer, setVideoPlayer] = useState(idVideo);

  if (videoPlayer !== idVideo) {
    setVideoPlayer(idVideo);
  }
  const [dataVideos, isLoading] = useYoutubeApi(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&relatedToVideoId=${videoPlayer}&type=video`
  );

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <RelatedSection theme={mode}>
          <RelatedBar className="RelatedBar" theme={mode}>
            <RelatedBarTxt>{title}</RelatedBarTxt>
          </RelatedBar>
          <ScrollDiv>
            {dataVideos.items.map((item) => (
              <RelatedVideosCard
                key={item.id.videoId}
                id={item.id.videoId}
                urlImage={item.snippet.thumbnails.medium.url}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                published={item.snippet.publishedAt}
                theme={mode}
              />
            ))}
          </ScrollDiv>
        </RelatedSection>
      )}
    </div>
  );
}

export default RelatedVideos;
