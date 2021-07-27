import React from 'react';
import { RelatedDiv, IndvReltDiv, RelatedBg, RelatedImg, RelatedTitle, RelatedExtInfo } from './RelativeVid.styled';
import { Link } from 'react-router-dom';



const VideoCardRelative = ({ id, urlImage, title, channel }) => (
  <Link to={`/v/${id}`}>
    <div id={id}>
      <RelatedDiv className="RelatedDiv">
        <IndvReltDiv className="">
          <RelatedBg>
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

export default VideoCardRelative;
