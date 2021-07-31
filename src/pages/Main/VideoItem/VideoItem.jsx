import React, { memo } from "react";
import Card from "../../../components/molecules/Card";

const VideoItem = memo(({ onVideoClick, video, video: { snippet } }) => (
  <li>
    <Card
      title={snippet.title}
      uploadedName={snippet.channelTitle}
      uploadedDate={snippet.publishedAt}
      profileSrc={snippet.thumbnails.default.url}
      thumbnailSrc={snippet.thumbnails.high.url}
      onClick={() => onVideoClick(video)}
    />
  </li>
));

export default VideoItem;
