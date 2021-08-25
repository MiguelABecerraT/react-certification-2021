import React, { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const themeState = {
  darkMode: 'dark',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LIGHTMODE':
      return {
        ...state,
        darkMode: 'light',
      };
    case 'DARKMODE':
      return {
        ...state,
        darkMode: 'dark',
      };
    default:
      return state;
  }
};



const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, themeState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
