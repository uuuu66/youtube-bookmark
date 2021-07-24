import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import styled from "styled-components";

const StyledCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const VideoList = props => (
  <StyledCardList>
    {props.videos.map(video => (
      <VideoItem key={video.id} video={video} />
    ))}
  </StyledCardList>
);

export default VideoList;
