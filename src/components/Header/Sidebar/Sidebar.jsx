import React from 'react';
import { useState, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import home from '../../../img/home.svg';
import favorites from '../../../img/favorite.svg';
import loginIcon from '../../../img/eye.svg';
import logoutIcon from '../../../img/eye-closed.svg';
import { Button, SideContainer, SlickBar, Item, Text } from './Sidebar.styled';
import { ThemeContext } from '../../../providers/Theme/Theme.provider';

function Sidebar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const themeContext = useContext(ThemeContext);
  const { mode } = themeContext.state;

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <Button clicked={click} onClick={() => handleClick()} theme={mode} />
      <SideContainer>
        <SlickBar clicked={click} theme={mode}>
          <Item onClick={() => handleClick()} exact to="/" theme={mode}>
            <img src={home} alt="home" />
            <Text theme={mode}>Home</Text>
          </Item>
          {isAuthenticated ? (
            <>
              <Item onClick={() => handleClick()} exact to="/favorites" theme={mode}>
                <img src={favorites} alt="favorites" />
                <Text theme={mode}>Favorites</Text>
              </Item>
              <Item
                onClick={() => {
                  logout({ returnTo: window.location.origin });
                  handleClick();
                }}
                exact
                to="/"
                theme={mode}
              >
                <img src={logoutIcon} alt="logout" />
                <Text theme={mode}>LogOut</Text>
              </Item>
            </>
          ) : (
            <Item
              onClick={() => {
                loginWithRedirect();
                handleClick();
              }}
              exact
              to="/"
              theme={mode}
            >
              <img src={loginIcon} alt="login" />
              <Text theme={mode}>LogIn</Text>
            </Item>
          )}
        </SlickBar>
      </SideContainer>
    </>
  );
}

export default Sidebar;
