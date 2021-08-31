import React from 'react';
import { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import VideoList from '../../templates/VideoList/VideoList';
import { ThemeContext } from '../../providers/Theme/Theme.provider';
import { SearchContext } from '../../providers/Search/Search.provider';
import theme from '../../providers/Theme/Theme';
import { useYoutubeApi } from '../../utils/hooks/useYoutubeApi';
import {
  ContentMain,
  TitleDiv,
  ContDiv,
  ContDivFst,
  PrevBtn,
  NextBtn,
} from './Home.page.styled';

function HomePage() {
  const { isAuthenticated, user } = useAuth0();

  const themeContext = useContext(ThemeContext);
  const search = useContext(SearchContext);
  const { mode } = themeContext.state;
  const { value } = search.state;

  const [data, isLoading] = useYoutubeApi(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${process.env.REACT_APP_MAX_RESULTS_SEARCH}&key=${process.env.REACT_APP_API_KEY}&q=${value}&type=video`
  );

  if (isLoading) return <h2 className="App" style={{display: 'flex', justifyContent: 'center'}}>Loading...</h2>;

  return (
    <ContentMain>
      <TitleDiv theme={mode}>
        <h2 theme={mode}>Welcome {isAuthenticated ? user.name : 'Wizeliner'}!</h2>
      </TitleDiv>
      <ContDiv
        className="HomeDiv"
        style={{ backgroundImage: `url(${theme[mode].backgroundImage})` }}
      >
        <ContDivFst className="Videos">
          {data != null
            ? data.items.map((item) => <VideoList key={item.etag} item={item} id={item.id.videoId} snippet={item.snippet} url={`/v/${item.id.videoId}`}/>)
            : null}
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

export default HomePage;
