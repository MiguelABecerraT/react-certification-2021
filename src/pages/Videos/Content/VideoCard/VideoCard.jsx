import React from 'react';
import { MainVideoContent, VideoIframe, MainVideoTitle, MainVideoDescription, FooterText } from './VideoCard.styled';

const VideoDetail = ({ id, title, description, published, channel, theme }) => (
  <div>
    <MainVideoContent className="MainVideoContent">
      <VideoIframe
        className="VideoFrame"
        allowFullScreen
        frameBorder="0"
        title="{title}"
        src={`https://www.youtube.com/embed/${id}?controls=0&autoplay=1`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        theme={theme}
      />
    </MainVideoContent>
    <div className="">
      <MainVideoTitle className="MainVideoTitle" theme={theme}>
        {title}
      </MainVideoTitle>
      <MainVideoDescription className="MainVideoDescription" theme={theme}>
        {description}
      </MainVideoDescription>
      <FooterText theme={theme}>
        <div>
          {published}
        </div>
        <div>
          {channel}
        </div>
      </FooterText>
    </div>
  </div>
);

export default VideoDetail;
