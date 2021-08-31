import React from 'react';
import { RelatedDiv, IndvReltDiv, RelatedBg, RelatedImg, RelatedTitle, RelatedExtInfo } from './RelatedVideos.styled';
import { Link } from 'react-router-dom';

const RelatedVideosCard = ({ id, urlImage, title, channel, theme }) => (
  <Link to={`/v/${id}`}>
    <div id={id}>
      <RelatedDiv className="RelatedDiv">
        <IndvReltDiv className="">
          <RelatedBg theme={theme}>
            <RelatedImg src={urlImage} className="RelatedImg" />
            <RelatedTitle className="RelatedTitle">
              {title}
              <RelatedExtInfo className="">
                <div>
                  <div className="">{channel}</div>
                </div>
              </RelatedExtInfo>
            </RelatedTitle>
          </RelatedBg>
        </IndvReltDiv>
      </RelatedDiv>
    </div>
  </Link>
);

export default RelatedVideosCard;
