import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from './Home.page';

describe('home', () => {
  it('should contains something', () => {
    const result = render(<HomePage/>);
    const element = result.container.querySelector('button:first-of-type');
    expect(element).toBeInTheDocument();
  });

  test('should contains a specific text', () => {
    render(<HomePage/>);
    const element = screen.queryByText(/Welcome to the Challenge!/i);
    expect(element).toBeInTheDocument();
  });

  test('should contains certain parenting order', () => {
    const result = render(<HomePage/>);
    const element = result.container.querySelector('div div button span div svg path');
    expect(element).toBeInTheDocument();
  });
});
