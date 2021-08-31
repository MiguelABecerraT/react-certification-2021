import React from 'react';
import FavBtn from './Button/FavBtn';
import {
  MainVideoContent,
  VideoIframe,
  MainVideoTitle,
  MainVideoDescription,
  FooterText,
} from './VideoCard.styled';

const VideoCard = ({ id, title, description, published, channel, theme, data }) => (
  <div style={{ zIndex: '-1' }}>
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '60px',
          alignItems: 'center',
        }}
      >
        <MainVideoTitle className="MainVideoTitle" theme={theme}>
          {title}
        </MainVideoTitle>
        <FavBtn data={data} id={id}/>
      </div>
      <MainVideoDescription className="MainVideoDescription" theme={theme}>
        {description}
      </MainVideoDescription>
      <FooterText theme={theme}>
        <div>{published}</div>
        <div>{channel}</div>
      </FooterText>
    </div>
  </div>
);

export default VideoCard;
