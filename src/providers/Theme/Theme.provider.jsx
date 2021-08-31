import React, { createContext, useReducer } from 'react';
import { LIGHTMODE, DARKMODE } from '../../utils/constants';

export const ThemeContext = createContext();

const themeState = {
  mode: 'Light',
};

const reducer = (state, action) => {
  switch (action.type) {
    case LIGHTMODE:
      return {
        ...state,
        mode: 'Light',
      };
    case DARKMODE:
      return {
        ...state,
        mode: 'Dark',
      };
    default:
      return state;
  }
};



const ThemeProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, themeState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
