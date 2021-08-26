import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('App', () => {
  test('should contains a specific text', () => {
    const result = render(<Header/>);
    screen.debug();
    const element = screen.queryByText(/Dark Mode/i);
    expect(element).toBeInTheDocument();
  });

  test('should contains an specific structure', () => {

    const result = render(<Header/>);
    screen.debug();
    const element = result.container.querySelector('header div div div button span div svg path');
    expect(element).toBeInTheDocument();
  });
});