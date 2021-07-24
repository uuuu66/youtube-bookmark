import React from "react";
import Card from "../../../components/molecules/Card";

const VideoItem = ({ video: { snippet } }) => (
  <li>
    <Card
      title={snippet.title}
      uploadedName={snippet.channelTitle}
      uploadedDate={snippet.publishedAt}
      profileSrc={snippet.thumbnails.default.url}
      thumbnailSrc={snippet.thumbnails.standard.url}
    />
  </li>
);

export default VideoItem;
