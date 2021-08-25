import styled from 'styled-components';
import Theme from '../../Providers/Theme/Theme';

export const HeaderBar = styled.header`
  color: ${(props) => Theme[props.theme].Header.color};
  background-color: ${(props) => Theme[props.theme].mainColor};
  position: static;
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  box-shadow: ${(props) => Theme[props.theme].Header.boxShadow};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const HeaderDiv = styled.div`
  @media (min-width: 600px) {
    min-height: 56px;
  }
  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 64px;
  }
  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  min-height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  position: relative;
  align-items: center;
`;

export const BlankDiv = styled.div`
  flex-grow: 1;
`;

export const DMLogin = styled.div`
  @media (min-width: 960px) {
    display: flex;
  }
  display: none;
`;
