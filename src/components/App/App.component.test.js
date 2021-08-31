import React from 'react';
import { render, screen } from '@testing-library/react';
import "core-js/stable";
import "regenerator-runtime/runtime";

import App from './App.component';

describe('App', () => {
  test('should contains a specific text', () => {
    render(<App/>);
    screen.debug();
    const element = screen.getByText(/Loading .../i);
    expect(element.textContent).toBeInTheDocument;
  });

  test('should contains an specific structure', () => {

    const result = render(<App/>);
    screen.debug();
    const element = result.container.querySelector('header div button');
    expect(element).toBeInTheDocument();
  });
});