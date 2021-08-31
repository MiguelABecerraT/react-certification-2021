import React from 'react';
import {
  RelatedSection,
  RelatedBar,
  RelatedBarTxt,
  ScrollDiv,
} from './MoreFavorites.styled';
import RelatedVideosCard from '../RelatedVideosCard/RelatedVideos.details';

import { useContext } from 'react';
import { ThemeContext } from '../../providers/Theme/Theme.provider';

function favStorage() {
  const values = [];
  const keys = Object.keys(localStorage);

  for (let i = 0; i < keys.length; i++) {
    values.push(JSON.parse(localStorage.getItem(keys[i])));
  }

  return values;
}

function MoreFavorites({ idVideo, title }) {
  const themeContext = useContext(ThemeContext);
  const { mode } = themeContext.state;
  const data = favStorage();

  return (
    <div className="container mx-auto">
      <RelatedSection theme={mode}>
        <RelatedBar className="RelatedBar" theme={mode}>
          <RelatedBarTxt>{title}</RelatedBarTxt>
        </RelatedBar>
        <ScrollDiv>
          {data.map(
            (item) =>
              item.items !== undefined && (
                <RelatedVideosCard
                  key={item.items[0].id}
                  id={item.items[0].id}
                  urlImage={item.items[0].snippet.thumbnails.medium.url}
                  title={item.items[0].snippet.title}
                  channel={item.items[0].snippet.channelTitle}
                  published={item.items[0].snippet.publishedAt}
                  theme={mode}
                />
              )
          )}
        </ScrollDiv>
      </RelatedSection>
    </div>
  );
}

export default MoreFavorites;
