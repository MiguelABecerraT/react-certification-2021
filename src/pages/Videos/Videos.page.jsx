import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import VideoDetail from './VideoContent';
import VideosRelatives from './VideoContent/RelativeVideos/RelativeVideos';
//import Truncate from '../../utils/hooks/truncateString';
// import FormatPubDate from '../../../utils/formatPublishedDate';

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

const VideoColumn = styled.div`
  width: 60%;
  margin: 20px 20px 20px 20px;
`;

const RelatedCol = styled.div`
  width: 40%;
  margin: 20px 20px 20px 20px;
`;

function VideoPage() {
  const [videoData, setVideoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idVideo } = useParams();
  const [videoPlayer, setVideoPlayer] = useState(idVideo);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoPlayer}&key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setVideoData(data.items[0]);
      setIsLoading(false);
      setVideoPlayer(idVideo);
    };
    fetchData();
  }, [videoPlayer, idVideo]);

  // https://www.googleapis.com/youtube/v3/videos?id=Hm3wVzcHjnE&key=AIzaSyAe7ucFPzRVCuXh8wh8UzGX_onfJFvkzMQ&part=snippet

  return (
    <section>
      <Link to="/"> ← Back</Link>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <MainContainer className="VDetailsNRealted">
          <VideoColumn className="VideoColumn">
            <VideoDetail
              id={videoData.id}
              title={videoData.snippet.title}
              description={videoData.snippet.description}
              channel={videoData.snippet.channelTitle}
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
