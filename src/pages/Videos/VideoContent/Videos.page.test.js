import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoPage from './VideoDetail';

describe('Video Page', () => {
  test('should contains certain parenting order', () => {
    const result = render(<VideoPage/>);
    screen.debug();
    const element = result.container.querySelector('div div div iframe');
    expect(element).toBeInTheDocument();
  });
});
