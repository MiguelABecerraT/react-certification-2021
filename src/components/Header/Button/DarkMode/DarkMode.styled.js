import styled from 'styled-components';
import theme from '../../../../providers/Theme/Theme';

export const DMBtn = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-left: -11px;
  margin-right: 16px;
  vertical-align: middle;

  .DMSliderBar {
    width: 58px;
    height: 38px;
    display: inherit;
    padding: 12px;
    z-index: 0;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    flex-shrink: 0;
    vertical-align: inherit;
  }

  .RoundBtnSpan {
    top: 0;
    left: 0;
    color: ${(props) => theme[props.theme].Header.DarkMode.color};
    z-index: 1;
    position: absolute;
    transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    padding: 9px;
    flex: 0 0 auto;
    overflow: visible;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    outline: 0;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;

    .inputBtn {
      width: 100%;
      display: flex;
      align-items: inherit;
      justify-content: inherit;
    }
  }

  .RoundBtn {
    width: 20px;
    height: 20px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
      0px 1px 3px 0px rgb(0 0 0 / 12%);
    border-radius: 50%;
    background-color: currentColor;
  }

  input {
    left: -100%;
    width: 300%;
    top: 0;
    cursor: inherit;
    height: 100%;
    margin: 0;
    opacity: 0;
    padding: 0;
    z-index: 1;
    position: absolute;
  }

  .DMTitle {
    font-size: 1rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    margin: 0;
  }

  .barColor {
    width: 100%;
    height: 100%;
    opacity: 0.38;
    z-index: -1;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 7px;
    background-color: ${(props) => theme[props.theme].Header.color};
  }
`;