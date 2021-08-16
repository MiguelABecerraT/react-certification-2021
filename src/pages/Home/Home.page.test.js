import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from './Home.page';

describe('home', () => {
  test('should contains a specific text', () => {
    render(<HomePage/>);
    screen.debug();
    const element = screen.queryByText(/Loading.../i);
    expect(element).toBeInTheDocument();
  });

  test('should contains certain parenting order', () => {
    const result = render(<HomePage/>);
    screen.debug();
    const element = result.container.querySelector('div h2');
    expect(element).toBeInTheDocument();
  });
});
