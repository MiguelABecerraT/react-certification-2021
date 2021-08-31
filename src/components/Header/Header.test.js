import React from 'react';
import { getByText, render, screen } from '@testing-library/react';

import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import ThemeContext from '../../providers/Theme/Theme.provider';

describe('Header tests', () => {
  test('should contains a specific text', () => {
    render(<BrowserRouter><ThemeContext><Header/></ThemeContext></BrowserRouter>);
    screen.debug();
    const element = screen.getByText(/Light mode/i);
    expect(element.textContent).toBeInTheDocument
  });

  test('should contains an specific structure', () => {

    const result = render(<BrowserRouter><ThemeContext><Header/></ThemeContext></BrowserRouter>);
    screen.debug();
    const element = result.container.querySelector('div label span span span input');
    expect(element).toBeInTheDocument;
  });
});