import React, { useContext } from 'react';
import { HeaderBar, HeaderDiv, BlankDiv, DMLogin } from './Header.styled';

import Search from './Input/Search/SearchField';
import ThemeMode from './Button/ThemeMode/ThemeMode.jsx';
import Profile from './Button/Profile/Profile.jsx';
import { ThemeContext } from '../../providers/Theme/Theme.provider';
import Sidebar from './Sidebar/Sidebar';


function Header() {
  const themeContext = useContext(ThemeContext);
  const { mode } = themeContext.state;

  return (
    <HeaderBar className="Header" theme={mode}>
      <HeaderDiv className="HeaderDiv">
        <Sidebar />
        <Search theme={mode} />
        <BlankDiv />
        <DMLogin>
          <ThemeMode />
          <Profile theme={mode} />
        </DMLogin>
      </HeaderDiv>
    </HeaderBar>
  );
}

export default Header;
