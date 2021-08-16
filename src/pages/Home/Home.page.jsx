import React, { useEffect, useState } from 'react';
import { WelcomeTitle, ContentDiv, TitleDiv, ContDiv, ContDivFst, PrevBtn, NextBtn} from './Home.page.styled'

import HomeContent from './Content/HomeContent';

import './Home.styles.css';

function HomePage({ txtSearch }) {
  const useYoutubeApi = (url) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setIsLoading(false);
        setData(data);
      };
      fetchData();
    }, [url]);

    return [data, isLoading];
  };

  const term = txtSearch;

  const [data, isLoading] = useYoutubeApi(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${process.env.REACT_APP_MAX_RESULTS_SEARCH}&key=${process.env.REACT_APP_API_KEY}&q=${term}&type=video`
  );

  if (isLoading) return <WelcomeTitle className="App">Loading...</WelcomeTitle>;

  return (
      <ContentDiv>
        <TitleDiv>
          <WelcomeTitle>Welcome Wizeliner!</WelcomeTitle>
        </TitleDiv>
        <ContDiv className="HomeDiv" style={{backgroundImage: `url('https://i.pinimg.com/originals/74/43/a3/7443a31b6a19e5630b94a6538ff9bdd1.gif')`,}}>
          <ContDivFst className="Videos">
            {data != null
              ? data.items.map((item) => <HomeContent key={item.etag} item={item} />)
              : null}
          </ContDivFst>
          <ContDivFst>
            <PrevBtn className="PrevResults" type="button">
              ❮ Previous {process.env.REACT_APP_MAX_RESULTS_SEARCH} results
            </PrevBtn>
            <div style={{width: '24px'}}></div>
            <NextBtn className="NextResults" type="button">
              Next {process.env.REACT_APP_MAX_RESULTS_SEARCH} results ❯
            </NextBtn>
          </ContDivFst>
        </ContDiv>
      </ContentDiv>
  );
}

export default HomePage;
