import React from "react";
import styled from "styled-components";
import Title from "../../components/atoms/Title";

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
    <Title level={2}>{snippet.title}</Title>
    <Title level={3}>{snippet.channelTitle}</Title>
    <pre className="description">{snippet.description}</pre>
  </StyledCardDetail>
);

export default VideoDetail;
