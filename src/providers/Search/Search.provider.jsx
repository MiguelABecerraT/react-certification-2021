import React, { useReducer, createContext } from "react";

export const SearchContext = createContext();

const searchState = {
  loading: true,
  value: 'wizeline',
  errorMessage: null
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_VIDEOS_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
        value: action.value
      };
    case "SEARCH_VIDEOS_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_VIDEOS_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const SearchProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, searchState);
  
    return (
      <SearchContext.Provider value={{ state, dispatch }}>
        {props.children}
      </SearchContext.Provider>
    );
  };
  
  export default SearchProvider;