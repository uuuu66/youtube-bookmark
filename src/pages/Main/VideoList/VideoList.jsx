import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import styled from "styled-components";

const StyledCardList = styled.ul`
  display: flex;
  flex: ${props => props.display === "list" && "1 1 30%"};
  flex-direction: ${props => (props.display === "list" ? "column" : "row")};
  flex-wrap: wrap;
  list-style: none;

  @media screen and (max-width: 48rem) {
    flex-direction: column;
  }
`;

const VideoList = ({ videos, onVideoClick, display }) => (
  <StyledCardList display={display}>
    {videos.map(video => (
      <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} />
    ))}
  </StyledCardList>
);

export default VideoList;
