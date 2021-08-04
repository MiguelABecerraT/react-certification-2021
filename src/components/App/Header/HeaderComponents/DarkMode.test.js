import { render, screen } from '@testing-library/react';

import { MyDarkMode } from './DarKMode';

describe('Dark Mode Button', () => {
  test('should contains a button', () => {
    const result = render(MyDarkMode());
    const headerElement = result.container.querySelector('button:first-of-type');
    expect(headerElement).toBeInTheDocument();
  });

  test('should contains an specific parenting order', () => {
    const result = render(MyDarkMode());
    const element = result.container.querySelector('div div label span span input');
    expect(element).toBeInTheDocument();
  });
});
