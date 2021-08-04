import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App.component';

describe('App', () => {
  test('should contains a specific text', () => {
    const result = render(<App/>);
    screen.debug();
    const element = screen.queryByText(/Loading.../i);
    expect(element).toBeInTheDocument();
  });

  test('should contains an specific structure', () => {

    const result = render(<App/>);
    screen.debug();
    const element = result.container.querySelector('header div div div button span div svg path');
    expect(element).toBeInTheDocument();
  });
});