import styled from 'styled-components';
import theme from '../../providers/Theme/Theme';

export const RelatedSection = styled.div`
  background-image: url('${(props) => theme[props.theme].backgroundImage}');
  padding-right: 10px;
  box-shadow: ${(props) => theme[props.theme].Header.boxShadow};
`;

export const RelatedBar = styled.div`
  height: 30px;
  justify-content: center;
  margin-left: 5px;
  color: ${(props) => theme[props.theme].Header.color};
  background-color: ${(props) => theme[props.theme].mainColor};
  position: static;
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  box-shadow: ${(props) => theme[props.theme].Header.boxShadow};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  @media (max-width: 1045px) {
    flex-direction: column;
  }
`;

export const RelatedBarTxt = styled.div`
  margin: auto;
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
`;

export const ScrollDiv = styled.div`
  @media (min-width: 850px) {
    overflow-y: scroll;
    height: 600px;
  }
`;
