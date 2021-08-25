import React from 'react';
import { Menu } from './MenuBtn.styled';


function MenuBtn() {
  return (
    <Menu className="MenuBtn" tabindex="0" type="button" ariaLabel="open drawer">
      <span>
        <svg focusable="false" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </span>
    </Menu>
  );
}

export { MenuBtn };
