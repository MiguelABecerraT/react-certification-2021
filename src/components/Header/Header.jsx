import React, { useContext } from 'react';
import { HeaderBar, HeaderDiv, BlankDiv, DMLogin } from './Header.styled';

import { MenuBtn } from './Button/Menu/MenuBtn.jsx';
import { MySearch } from './Input/Search/SearchField';
import { MyDarkMode } from './Button/DarkMode/DarKMode';
import { ThemeContext } from '../../Providers/Theme/Theme.provider';
import { Login } from './Button/Login/Login.jsx';

function Header() {
  const theme = useContext(ThemeContext);
  const { darkMode } = theme.state;

  return (
    <HeaderBar className="Header" theme={darkMode}>
      <HeaderDiv className="HeaderDiv">
        <MenuBtn></MenuBtn>
        <MySearch />
        <BlankDiv></BlankDiv>
        <DMLogin>
          <MyDarkMode theme={darkMode} />
          <Login theme={darkMode} />
        </DMLogin>
      </HeaderDiv>
    </HeaderBar>
  );
}

export default Header;
