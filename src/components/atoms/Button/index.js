import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import PropTypes from "prop-types";

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${props =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
  },
  square: {
    height: "auto",
    fontSize: "1rem",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      margin-left: 0;
      margin-top: 1rem;
    `}
`;

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  padding-left: 1rem;
  padding-right: 1rem;
  color: white;
  font-weight: bold;
  cursor: pointer;

  ${sizeStyles}
  ${colorStyles}
  ${fullWidthStyle}
`;

const Button = ({ children, color, size, outline, fullWidth, ...rest }) => {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.propsTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  outline: PropTypes.boolean,
  fullWidth: PropTypes.boolean,
};

Button.defaultProps = {
  color: "blue",
  size: "medium",
  outline: false,
  fullWidth: false,
};

export default Button;
