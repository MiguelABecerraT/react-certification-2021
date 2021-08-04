import React, { useEffect, useState } from 'react';
import { RelatedSection, RelatedBar, RelatedBarTxt, ScrollDiv } from './RelativeVid.styled';
import VideoCardRelative from '../RelativeVideos/RelativeVideosDetails';
// import FormatPubDate from '../../utils/formatPublishedDate';

function VideosRelatives({ idVideo }) {
  console.log(idVideo);
  const [dataVideos, setVideoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [videoPlayer, setVideoPlayer] = useState(idVideo);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&relatedToVideoId=${videoPlayer}&type=video`
      );
      const data = await response.json();
      setVideoData(data.items);
      console.log(data.items);
      setIsLoading(false);
      setVideoPlayer(idVideo);
    };
    fetchData();
  }, [videoPlayer, idVideo]);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <RelatedSection>
          <RelatedBar className="RelatedBar">
            <RelatedBarTxt>Related Videos</RelatedBarTxt>
          </RelatedBar>
          <ScrollDiv>
            {dataVideos.map((item) => (
              <VideoCardRelative
                key={item.id.videoId}
                id={item.id.videoId}
                urlImage={item.snippet.thumbnails.medium.url}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                published={item.snippet.publishedAt}
              />
            ))}
          </ScrollDiv>
        </RelatedSection>
      )}
    </div>
  );
}

export default VideosRelatives;
