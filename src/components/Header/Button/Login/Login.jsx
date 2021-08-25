import React from 'react';

import { LoginBtn } from './Login.styled';

function Login(props) {
  return (
    <LoginBtn
      className="ProfileBtn"
      tabindex="0"
      type="button"
      ariaLabel="account of current user"
      ariaHaspopup="true"
      theme={props.theme}
    >
      <span>
        <div>
          <svg focusable="false" viewBox="0 0 24 24" >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </span>
    </LoginBtn>
  );
}

export { Login };
