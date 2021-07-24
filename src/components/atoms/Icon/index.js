import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const fontSize = ({ width, height }) => {
  const size = width || height;
  return size ? `${size / 16}rem` : "1.25em";
};

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize};
  width: 1em;
  height: 1em;
  margin: 0.1em;
  box-sizing: border-box;
  & > svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: currentcolor;
  }
`;

const Icon = ({ icon, ...props }) => {
  return <Wrapper {...props} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Icon;
