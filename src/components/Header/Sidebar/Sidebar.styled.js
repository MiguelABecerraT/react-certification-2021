import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from '../../../providers/Theme/Theme';

export const Button = styled.button`
  background-color: ${(props) => theme[props.theme].mainColor};
  border: none;
  min-width: 9.5rem;
  @media (min-width: 600px) {
    min-height: 56px;
  }
  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 64px;
  }
  @media (min-width: 600px) {
    padding-right: 24px;
  }
  min-height: 48px;
  cursor: pointer;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: '';
    background-color: ${(props) => theme[props.theme].Header.color};
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    @media (min-width: 600px) {
      top: ${(props) => (props.clicked ? '1.5' : '1.5rem')};
    }
    top: ${(props) => (props.clicked ? '1.5' : '1rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }

  &::after {
    @media (min-width: 600px) {
      top: ${(props) => (props.clicked ? '1.5' : '2rem')};
    }
    top: ${(props) => (props.clicked ? '1.2' : '1.5rem')};
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`;

export const SideContainer = styled.div`
  background: none;
  width: 3.5rem;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SlickBar = styled.ul`
  width: 150px;
  height: fit-content;
  color: ${(props) => theme[props.theme].Header.color};
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => theme[props.theme].mainColor};

  padding: 1.5rem 0;

  position: absolute;
  left: 0;

  @media (min-width: 600px) {
      top: ${(props) => (props.clicked ? '2.5rem' : '-350%')};
    }
  top: ${(props) => (props.clicked ? '2rem' : '-500%')};
  transition: top 0.5s ease;
  z-index: ${(props) => (props.clicked ? '1' : '-1')};
  border-radius: 0 0 25px 0;
  box-shadow: ${(props) => theme[props.theme].Header.boxShadow};
`;

export const Item = styled(NavLink)`
  width: 100%;
  padding: 1rem 1rem;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid ${(props) => theme[props.theme].txtColor};
    background-color: ${(props) => theme[props.theme].Sidebar.hoverColor};

    span {
      color: ${(props) => theme[props.theme].txtColor};
    }

    img {
      filter: ${(props) => theme[props.theme].Sidebar.filterOn};
    }
  }
  img {
    width: 1.8rem;
    height: auto;
    filter: ${(props) => theme[props.theme].Sidebar.filterOff};
  }
`;

export const Text = styled.span`
  margin-left: 0.5rem;
  color: ${(props) => theme[props.theme].Header.color};
  cursor: text;
  display: inline-flex;
  position: relative;
  font-size: 1rem;
  box-sizing: border-box;
  align-items: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.1876em;
  letter-spacing: 0.00938em;
  cursor: pointer;

  :active {
    color: ${(props) => theme[props.theme].Header.color};
  }
`;
