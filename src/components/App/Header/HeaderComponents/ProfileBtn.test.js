import { render } from '@testing-library/react';

import { MyProfBtn } from './ProfileBtn';

describe('Profile Button', () => {
  test('should contains a button', () => {
    const result = render(MyProfBtn());
    const element = result.container.querySelector('button:first-of-type');
    expect(element).toBeInTheDocument();
  });
});
