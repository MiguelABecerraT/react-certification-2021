import styled from 'styled-components';
import theme from '../../providers/Theme/Theme';

export const ContentMain = styled.div`
  width: calc(100% + 12px);
  margin: -12px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const TitleDiv = styled.div`
  padding: 12px;
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
  margin: 0;
  box-sizing: border-box;
  background-color: ${(props) => theme[props.theme].color};
  z-index: -10;
  h2 {
    font-size: 3.75rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.00833em;
    margin: 0;
    text-align: center;
    padding-top: 30px;
    color: ${(props) => theme[props.theme].txtColor};
  }
`;

export const ContDiv = styled.div`
  padding: 12px;
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
  margin: 0;
  box-sizing: border-box;
`;

export const ContDivFst = styled.div`
  @media (min-width: 1135px) {
    width: 1135px;
    justify-content: center;
  }
  width: 100%;
  padding: 20px;
  margin: 0px auto;
  flex: 1 1 0%;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  justify-content: center;
`;

export const PrevBtn = styled.button`
  height: 32px;
  background-color: ${(props) => theme[props.theme].mainColor};
  color: ${(props) => theme[props.theme].color};
  border-radius: 5%;
  border: none;
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  cursor: pointer;
  :hover {
    background-color: #acacac;
  }
`;

export const NextBtn = styled.button`
  height: 32px;
  background-color: ${(props) => theme[props.theme].mainColor};
  color: ${(props) => theme[props.theme].color};
  border-radius: 5%;
  border: none;
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  cursor: pointer;
  :hover {
    background-color: #acacac;
  }
`;

export const NoVideos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: auto; 
  margin-top: 40px;

  background-color: rgb(255, 231, 236);
`;

export const NoVideosDiv = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
  background-color: ${(props) => theme[props.theme].color};

  position: absolute;
  width: 100%;
`;
