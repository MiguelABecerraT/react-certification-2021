import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContDivSnd = styled.div`
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
  width: 345px;
  height: 345px;
  margin: 10px;
`;

const Btn = styled.button`
  width: 100%;
  display: block !important;
  text-align: inherit;
  color: inherit;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  padding: 0;
  position: relative;
  align-items: center;
  user-select: none;
  border-radius: 0;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
`;

const BtnImage = styled.div`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 140px;
  width: 100%;
`;

const ContDivText = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  margin-bottom: 0.35em;
  font-size: 1.25rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  margin: 0;
`;

const Description = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  margin: 0;
`;

function HomeContent(props) {
  return (
    <Link to={`/v/${props.item.id.videoId}`}>
      <ContDivSnd>
        <Btn tabindex="0" type="button">
          <BtnImage
            title={`${props.item.snippet.title}`}
            style={{
              backgroundImage: `url(${props.item.snippet.thumbnails.high.url})`,
            }}
          ></BtnImage>
          <ContDivText>
            <Title>{`${props.item.snippet.title}`}</Title>
            <Description>{`${props.item.snippet.description}`}</Description>
          </ContDivText>
        </Btn>
      </ContDivSnd>
    </Link>
  );
}

export default HomeContent;
