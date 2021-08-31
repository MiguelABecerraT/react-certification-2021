import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../../templates/VideoCard';
import MoreFavorites from '../../templates/MoreFavorites/MoreFavorites';
import { useYoutubeApi } from '../../utils/hooks/useYoutubeApi';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/Theme/Theme.provider';
import { MainContainer, VideoColumn, RelatedCol, VideoPageDiv} from './Favorite.Video.styled';
import { FAVIDS } from '../../utils/constants';

function FavoriteVideo() {
  const themeContext = useContext(ThemeContext);
  const { mode } = themeContext.state;
  const { idVideo } = useParams();
  const [videoPlayer, setVideoPlayer] = useState(idVideo);

  if (videoPlayer !== idVideo) {
    setVideoPlayer(idVideo);
  }
  const [videoData, isLoading] = useYoutubeApi(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoPlayer}&key=${process.env.REACT_APP_API_KEY}`
  );

  return (
    <VideoPageDiv theme={mode}>
    <section>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <MainContainer className="VDetailsNRealted" theme={mode}>
          <VideoColumn className="VideoColumn">
            <VideoCard
              id={videoData.items[0].id}
              title={videoData.items[0].snippet.title}
              description={videoData.items[0].snippet.description}
              channel={videoData.items[0].snippet.channelTitle}
              theme={mode}
              data={videoData}
            />
          </VideoColumn>
          <RelatedCol className="RelatedCol">
            <MoreFavorites idVideo={idVideo} title={FAVIDS} data={true}/>
          </RelatedCol>
        </MainContainer>
      )}
    </section>
    </VideoPageDiv>
  );
}

export default FavoriteVideo;
