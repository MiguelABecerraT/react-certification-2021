import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ContDivSnd, Btn, BtnImage, Title, Description, ContDivText} from './VideoList.styled'
import {ThemeContext} from '../../providers/Theme/Theme.provider';


function VideoList({id, snippet, url}) {
  const themeContext = useContext(ThemeContext);
  const { mode } = themeContext.state;

  return (
    <Link to={url}>
      <ContDivSnd theme={mode}>
        <Btn tabindex="0" type="button">
          <BtnImage
            title={`${snippet.title}`}
            style={{
              backgroundImage: `url(${snippet.thumbnails.high.url})`,
            }}
          />
          <ContDivText>
            <Title theme={mode}>{`${snippet.title}`}</Title>
            <Description theme={mode}>{`${snippet.description}`}</Description>
          </ContDivText>
        </Btn>
      </ContDivSnd>
    </Link>
  );
}

export default VideoList;
