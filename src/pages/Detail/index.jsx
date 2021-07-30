import React from "react";
import styled from "styled-components";

const StyledCardDetail = styled.div`
  flex: 1 1 70%;
  padding: 0.2em;

  .description {
    white-space: pre-wrap;
  }
`;

const VideoDetail = ({ video, video: { snippet } }) => (
  <StyledCardDetail>
    <iframe
      title={snippet.title}
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.channelTitle}</h3>
    <pre className="description">{snippet.description}</pre>
  </StyledCardDetail>
);

export default VideoDetail;
