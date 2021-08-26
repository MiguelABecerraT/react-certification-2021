import styled from 'styled-components';
import theme from '../../../../providers/Theme/Theme';

export const LoginBtn = styled.button`
  color: inherit;
  margin-right: -12px;
  flex: 0 0 auto;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  span {
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }

  div {
    color: inherit;
    background-color: ${(props) => theme[props.theme].Header.Login.backgroundColor};
    width: 40px;
    height: 40px;
    display: flex;
    overflow: hidden;
    position: relative;
    font-size: 1.25rem;
    align-items: center;
    flex-shrink: 0;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    line-height: 1;
    user-select: none;
    border-radius: 50%;
    justify-content: center;
  }

  svg {
    width: 75%;
    height: 75%;
    fill: currentColor;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
  }
`;