import React from 'react';
import styled from 'styled-components';

const MainVideoContent = styled.div`
  padding-bottom: 20px;
  width: 100%;
`;

const VideoIframe = styled.iframe`
    width: 100%;
    height: 400px;
    #movie_player{
      background-color: white!important;
    }
`;

const MainVideoTitle = styled.div`
    margin-bottom: 0.35em;
    font-size: 1.25rem;
    font-family: 'Roboto','Helvetica','Arial',sans-serif;
    font-weight: 500;
    line-height: 1.6;
`;

const MainVideoDescription = styled.div`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
`;

const VideoDetail = ({ id, title, description, published, channel }) => (
  <div className="rounded overflow-hidden shadow-lg">
    <MainVideoContent className="MainVideoContent">
      <VideoIframe
        className="VideoFrame"
        allowFullScreen
        frameBorder="0"
        title="{title}"
        src={`https://www.youtube.com/embed/${id}?controls=0&autoplay=1`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    </MainVideoContent>
    <div className="">
      <MainVideoTitle className="MainVideoTitle">
        {title}
      </MainVideoTitle>
      <MainVideoDescription className="MainVideoDescription">
        {description}
      </MainVideoDescription>
      <div className="flex justify-between bg-gray-400">
        <div className="flex-shrink md:flex-shrink-0 text-xs self-start p-1">
          {published}
        </div>
        <div className="md:flex-shrink-0 bg-red-500 font-serif text-xs italic text-white p-1 self-end">
          {channel}
        </div>
      </div>
    </div>
  </div>
);

export default VideoDetail;
