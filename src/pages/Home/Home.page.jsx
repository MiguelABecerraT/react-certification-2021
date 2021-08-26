import React from 'react';
import {
  ContentMain,
  TitleDiv,
  ContDiv,
  ContDivFst,
  PrevBtn,
  NextBtn,
} from './Home.page.styled';

import HomeContent from './Content/Home.Content';

import { useContext } from 'react';
import { ThemeContext } from '../../providers/Theme/Theme.provider';
import { SearchContext } from '../../providers/Search/Search.provider';
import theme from '../../providers/Theme/Theme';
import { useYoutubeApi } from '../../utils/hooks/useYoutubeApi';

function HomePage() {
  const mode = useContext(ThemeContext);
  const search = useContext(SearchContext);
  const { darkMode } = mode.state;
  const { value } = search.state;

  const [data, isLoading] = useYoutubeApi(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${process.env.REACT_APP_MAX_RESULTS_SEARCH}&key=${process.env.REACT_APP_API_KEY}&q=${value}&type=video`
  );

  if (isLoading) return <h2 className="App">Loading...</h2>;

  return (
    <ContentMain>
      <TitleDiv theme={darkMode}>
        <h2 theme={darkMode}>Welcome Wizeliner!</h2>
      </TitleDiv>
      <ContDiv
        className="HomeDiv"
        style={{ backgroundImage: `url(${theme[darkMode].backgroundImage})` }}
      >
        <ContDivFst className="Videos">
          {data != null
            ? data.items.map((item) => <HomeContent key={item.etag} item={item} />)
            : null}
        </ContDivFst>
        <ContDivFst>
          <PrevBtn className="PrevResults" type="button">
            ❮ Previous {process.env.REACT_APP_MAX_RESULTS_SEARCH} results
          </PrevBtn>
          <div style={{ width: '24px' }}></div>
          <NextBtn className="NextResults" type="button">
            Next {process.env.REACT_APP_MAX_RESULTS_SEARCH} results ❯
          </NextBtn>
        </ContDivFst>
      </ContDiv>
    </ContentMain>
  );
}

export default HomePage;
