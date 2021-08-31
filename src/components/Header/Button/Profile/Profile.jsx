import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { ProfileBtn, WizeIcon } from './Profile.styled';
import wizeline from '../../../../img/wizeline.png';

function Profile({ theme }) {
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return !isAuthenticated ? (
    <ProfileBtn
      className="ProfileBtn"
      tabindex="0"
      type="button"
      ariaLabel="account of current user"
      ariaHaspopup="true"
      theme={theme}
      onClick={() => loginWithRedirect()}
    >
      <span>
        <div>
          <svg focusable="false" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </span>
    </ProfileBtn>
  ) : (
    <ProfileBtn
      className="ProfileBtn"
      tabindex="0"
      type="button"
      ariaLabel="account of current user"
      ariaHaspopup="true"
      theme={theme}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      <WizeIcon src={wizeline} alt="Wizeline" />
    </ProfileBtn>
  );
}

export default Profile;
