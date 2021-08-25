import styled from 'styled-components';
import theme from '../../../../Providers/Theme/Theme';

export const SearchField = styled.div`
  @media (min-width: 600px) {
    width: auto;
    margin-left: 24px;
  }
  width: 100%;
  position: relative;
  margin-left: 0;
  margin-right: 16px;
  border-radius: 4px;
  background-color: ${(props)=> theme[props.theme].Header.Search.backgroundColor};

  .SrchImg {
    height: 100%;
    display: flex;
    padding: 0px 16px;
    position: absolute;
    align-items: center;
    pointer-events: none;
    justify-content: center;

    svg {
      fill: currentColor;
      width: 1em;
      height: 1em;
      display: inline-block;
      font-size: 1.5rem;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      flex-shrink: 0;
      user-select: none;
      svg:not(:root) {
        overflow: hidden;
      }
    }
  }
`;

export const SearchInput = styled.div`
  color: inherit;
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

  input {
    width: 20ch;
  padding: 8px 8px 8px 0px;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding-left: calc(1em + 32px);
  font: inherit;
  color: currentColor;
  border: 0;
  height: 1.1876em;
  margin: 0;
  display: block;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  letter-spacing: inherit;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
  ::placeholder {
    color: ${(props)=> theme[props.theme].Header.Search.placeholder};
  }
}
`;