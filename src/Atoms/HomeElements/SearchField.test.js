import { render, screen } from '@testing-library/react';

import { MySearch } from './SearchField';

describe('Search Button', () => {
    test('should contains a svg with a path as a child, inside a div which is also inside a div', () => {
      const result = render(MySearch());
      const element = result.container.querySelector('div div svg path');
      expect(element).toBeInTheDocument();
    });
  });