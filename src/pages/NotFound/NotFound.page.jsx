import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../providers/Theme/Theme.provider';

import { HomeLink } from './NotFound.styles';

function NotFoundPage() {
  const themeContext = useContext(ThemeContext);
  const { mode } = themeContext.state;

  return (
    <HomeLink className="not-found" theme={mode}>
      <Link to="/" className="home-link">
        home
        <img src="404.gif" alt="page not found" />
      </Link>
      
    </HomeLink>
  );
}

export default NotFoundPage;
