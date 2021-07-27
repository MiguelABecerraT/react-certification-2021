import { render, screen } from '@testing-library/react';

import App from './App.component';

describe('App', () => {
  test('should contains a specific text', () => {
    const result = render(App());
    const element = screen.queryByText(/Welcome to the Challenge!/i);
    expect(element).toBeInTheDocument();
  });
});