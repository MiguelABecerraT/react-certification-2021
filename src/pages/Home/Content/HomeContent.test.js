import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import HomeContent from './HomeContent';

const data = {
  id: {
    kind: 'youtube#video',
    videoId: 'nmXMgqjQzls',
  },
  item: {
    etag: 'erqeM78PZDWIBe8qOGHGM2WdSE8',
  },
  snippet: {
    thumbnails: {
      high: {
        url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
      },
    },
    title: 'Test',
  },
};

describe('Home Content', () => {
  test('should contains a button', () => {
    const result = render(<BrowserRouter><HomeContent key={data.etag} item={data} /></BrowserRouter>);
    expect(screen.getByRole('button')).toBeInTheDocument()
  });

  test('should contains an specific parenting order', () => {
    const result = render(<BrowserRouter><HomeContent key={data.etag} item={data} /></BrowserRouter>);
    const headerElement = result.container.querySelector('div h2');
    expect(headerElement).toBeInTheDocument();
  });

  test('should contains an specific parenting order', () => {
    const result = render(<BrowserRouter><HomeContent key={data.etag} item={data} /></BrowserRouter>);
    const element = result.container.querySelector('div p');
    expect(element).toBeInTheDocument();
  });
});
