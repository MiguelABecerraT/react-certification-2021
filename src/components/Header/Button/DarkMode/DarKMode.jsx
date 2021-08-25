import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../../../providers/Theme/Theme.provider';
import { DMBtn } from './DarkMode.styled';

function MyDarkMode(props) {
  const mode = useContext(ThemeContext)
  const {darkMode} = mode.state
  
  const str = props.theme;
  const modeText = str.charAt(0).toUpperCase() + str.slice(1);

  const handleDarkMode = () => {
    if (darkMode === 'dark') {
      mode.dispatch({ type: "LIGHTMODE" });
    } else {
      mode.dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <DMBtn theme={props.theme}>
      <span className="DMSliderBar">
        <span className="RoundBtnSpan">
          <span className="inputBtn">
            <input
              className="DarkMInput"
              name="darkMode"
              type="checkbox"
              onClick={handleDarkMode}
            />
            <span className="RoundBtn" />
          </span>
        </span>
        <span className="barColor" />
      </span>
      <span className="DMTitle">{modeText} mode</span>
    </DMBtn>
  );
}

export { MyDarkMode };
