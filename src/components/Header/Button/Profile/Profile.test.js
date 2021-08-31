import React from 'react';
import { render, screen } from '@testing-library/react';

import Profile from './Profile';

describe('Profile', () => {
  test('should contains a specific text', () => {
    const result = render(<Profile/>);
    screen.debug();
    const element = screen.getByText(/Loading .../i);
    expect(element).toBeInTheDocument();
  });


});