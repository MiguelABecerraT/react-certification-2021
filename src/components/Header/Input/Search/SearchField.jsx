import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchField, SearchInput } from './Search.styled';
import { ThemeContext } from '../../../../providers/Theme/Theme.provider';
import { SearchContext } from '../../../../providers/Search/Search.provider';

function MySearch(props) {
  const mode = useContext(ThemeContext);
  const search = useContext(SearchContext);
  const { darkMode } = mode.state;

  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  useEffect(() => {
    let code = '';
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        code = 'Enter';
        event.preventDefault();
        search.dispatch({ type: 'SEARCH_VIDEOS_REQUEST', value: inputValue });
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
      if (code === 'Enter') {
        history.push('/');
      }
    };
  }, [props, history, search, inputValue]);

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <SearchField className="SearchField" theme={darkMode}>
      <div className="SrchImg">
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </div>
      <SearchInput className="SrchCont" theme={darkMode}>
        <input
          className="SrchInput"
          placeholder="Search &amp; Discover..."
          type="text"
          aria-label="search"
          value={inputValue || ''}
          onChange={onChange}
        ></input>
      </SearchInput>
    </SearchField>
  );
}

export { MySearch };
