import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import VideoCardRelative from './RelativeVideosDetails';

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
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
      },
    },
    title: 'Test',
  },
};

describe('Relative Videos Tab', () => {
  test('should contains a button', () => {
    const result = render(<BrowserRouter><VideoCardRelative key={data.id.videoId}
        id={data.id.videoId}
        urlImage={data.snippet.thumbnails.medium.url}
        title={data.snippet.title}
        channel={data.snippet.channelTitle}
        published={data.snippet.publishedAt}/></BrowserRouter>);
        screen.debug();
        const element = screen.queryByText(/Test/i);
        expect(element).toBeInTheDocument();
  });

  test('should contains an specific parenting order', () => {
    const result = render(<BrowserRouter><VideoCardRelative key={data.id.videoId}
        id={data.id.videoId}
        urlImage={data.snippet.thumbnails.medium.url}
        title={data.snippet.title}
        channel={data.snippet.channelTitle}
        published={data.snippet.publishedAt}/></BrowserRouter>);
    const headerElement = result.container.querySelector('a div div div div img');
    expect(headerElement).toBeInTheDocument();
  });
});
