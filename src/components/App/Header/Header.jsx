import React, { useState } from 'react';
import { HeaderBar, HeaderDiv, BlankDiv } from './Header.styled';

import { MyBtn } from './HeaderComponents/MenuBtn';
import { MySearch } from './HeaderComponents/SearchField.jsx';
import { MyDarkMode } from './HeaderComponents/DarKMode';

function Header(props) {
  const [value, setValue] = useState('');

  const onchange = (data) => {
    setValue(data);
    props.onchange(data);
  };

  return (
    <HeaderBar className="Header">
      <HeaderDiv className="HeaderDiv">
        <MyBtn></MyBtn>
        <MySearch
          data={value}
          onchange={(e) => {
            onchange(e);
          }}
        ></MySearch>
        <BlankDiv></BlankDiv>
        <MyDarkMode></MyDarkMode>
      </HeaderDiv>
    </HeaderBar>
  );
}

export default Header;
