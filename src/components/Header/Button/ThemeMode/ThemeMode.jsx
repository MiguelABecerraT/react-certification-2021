import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../../../providers/Theme/Theme.provider';
import { DARKMODE, LIGHTMODE } from '../../../../utils/constants';
import { ThemeBtn } from './ThemeMode.styled';

function ThemeMode() {

  const themeContext = useContext(ThemeContext)
  const {mode} = themeContext.state

  const handleThemeMode = () => {
    if (mode === 'Dark') {
      themeContext.dispatch({ type: LIGHTMODE });
    } else {
      themeContext.dispatch({ type: DARKMODE });
    }
  };

  return (
    <ThemeBtn theme={mode}>
      <span className="TMSliderBar">
        <span className="RoundBtnSpan">
          <span className="inputBtn">
            <input
              className="ThemeMInput"
              name="themeMode"
              type="checkbox"
              onClick={handleThemeMode}
            />
            <span className="RoundBtn slider round" />
          </span>
        </span>
        <span className="barColor" />
      </span>
      <span className="TMTitle">{mode} mode</span>
    </ThemeBtn>
  );
}

export default ThemeMode;
