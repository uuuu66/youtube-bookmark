import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const sizes = {
  large: {
    width: "20rem",
    height: "14rem",
  },
  medium: {
    width: "2.25rem",
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    width: "1.75rem",
    height: "1.75rem",
    fontSize: "0.875rem",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
  `}
`;

const StyledImage = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  border-radius: ${props => props.round && "50%"};
  cursor: pointer;

  ${sizeStyles}
`;

const Image = ({ alt, imgSrc, size, round, ...props }) => {
  return <StyledImage alt={alt} src={imgSrc} size={size} round={round} />;
};

Image.defaultProps = {
  className: "",
  size: "medium",
};

Image.propsTypes = {
  alt: PropTypes.string,
  imgSrc: PropTypes.string,
  size: PropTypes.string,
  round: PropTypes.boolean,
  lazy: PropTypes.boolean,
};

export default Image;
