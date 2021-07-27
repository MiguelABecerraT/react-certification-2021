import { render, screen } from '@testing-library/react';

import HomeContent from './HomeContent';

const data = {
  item: {
    snippet: {
      thumbnails: {
        high: {
          url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
        },
      },
    },
  },
};

describe('Home Content', () => {
  test('should contains a button', () => {
    const result = render(HomeContent(data));
    const headerElement = result.container.querySelector('button:first-of-type');
    expect(headerElement).toBeInTheDocument();
  });

  test('should contains an specific parenting order', () => {
    const result = render(HomeContent(data));
    const headerElement = result.container.querySelector('div h2');
    expect(headerElement).toBeInTheDocument();
  });

  test('should contains an specific parenting order', () => {
    const result = render(HomeContent(data));
    const element = result.container.querySelector('div p');
    expect(element).toBeInTheDocument();
  });
});
