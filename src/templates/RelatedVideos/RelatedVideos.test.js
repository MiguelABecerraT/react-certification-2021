import React from 'react';
import { render, screen } from '@testing-library/react';

import VideosRelatives from './RelativeVideos';

describe('Relative Videos', () => {
  test('should contains certain parenting order', () => {
    const result = render(<VideosRelatives/>);
    screen.debug();
    const element = result.container.querySelector('div h1');
    expect(element).toBeInTheDocument();
  });

  test('should contains a specific text', () => {
    const result = render(<VideosRelatives/>);
    screen.debug();
    const element = screen.queryByText(/Loading.../i);
    expect(element).toBeInTheDocument();
  });
});