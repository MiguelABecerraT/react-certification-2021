import React from 'react';
import { useContext } from 'react';

import VideoList from '../../templates/VideoList/VideoList';
import { ThemeContext } from '../../providers/Theme/Theme.provider';
import theme from '../../providers/Theme/Theme';

import {
  ContentMain,
  TitleDiv,
  ContDiv,
  ContDivFst,
  PrevBtn,
  NextBtn,
  NoVideos,
  NoVideosDiv,
} from './Favorites.page.styled';

function favStorage() {
  const values = [];
  const keys = Object.keys(localStorage);

  for (let i = 0; i < keys.length; i++) {
    values.push(JSON.parse(localStorage.getItem(keys[i])));
  }

  return values;
}

function Favorites() {
  const themeContext = useContext(ThemeContext);
  const { mode } = themeContext.state;
  const data = favStorage();

  return data.length === 0 ? (
    <NoVideosDiv theme={mode}>
      <NoVideos>
        <h2>You haven't added any video to your favorites yet </h2>
      </NoVideos>
    </NoVideosDiv>
  ) : (
    <ContentMain>
      <TitleDiv theme={mode}>
        <h2 theme={mode}>Favorite Videos</h2>
      </TitleDiv>
      <ContDiv
        className="HomeDiv"
        style={{ backgroundImage: `url(${theme[mode].backgroundImage})` }}
      >
        <ContDivFst className="Videos">
          {data.map((item) => item.items !== undefined && <VideoList key={item.etag} item={item} id={item.items[0].id} snippet={item.items[0].snippet} url={`/f/${item.items[0].id}`}/>)}
        </ContDivFst>
        <ContDivFst>
          <PrevBtn className="PrevResults" type="button" theme={mode}>
            ❮ Previous {process.env.REACT_APP_MAX_RESULTS_SEARCH} results
          </PrevBtn>
          <div style={{ width: '24px' }} />
          <NextBtn className="NextResults" type="button" theme={mode}>
            Next {process.env.REACT_APP_MAX_RESULTS_SEARCH} results ❯
          </NextBtn>
        </ContDivFst>
      </ContDiv>
    </ContentMain>
  );
}

export default Favorites;
