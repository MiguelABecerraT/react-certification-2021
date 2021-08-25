import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoDetail from './Content/VideoCard';
import VideosRelatives from './Content/RelatedVideos/RelatedVideos';
import { useYoutubeApi } from '../../utils/hooks/useYoutubeApi';
import { useContext } from 'react';
import { ThemeContext } from '../../Providers/Theme/Theme.provider';
import { MainContainer, VideoColumn, RelatedCol } from './Video.styled';

function VideoPage() {
  const mode = useContext(ThemeContext);
  const { darkMode } = mode.state;
  const { idVideo } = useParams();
  const [videoPlayer, setVideoPlayer] = useState(idVideo);

  if (videoPlayer !== idVideo) {
    setVideoPlayer(idVideo);
  }
  const [videoData, isLoading] = useYoutubeApi(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoPlayer}&key=${process.env.REACT_APP_API_KEY}`
  );

  return (
    <section>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <MainContainer className="VDetailsNRealted" theme={darkMode}>
          <VideoColumn className="VideoColumn">
            <VideoDetail
              id={videoData.items[0].id}
              title={videoData.items[0].snippet.title}
              description={videoData.items[0].snippet.description}
              channel={videoData.items[0].snippet.channelTitle}
              theme={darkMode}
            />
          </VideoColumn>
          <RelatedCol className="RelatedCol">
            <VideosRelatives idVideo={idVideo} />
          </RelatedCol>
        </MainContainer>
      )}
    </section>
  );
}

export default VideoPage;
