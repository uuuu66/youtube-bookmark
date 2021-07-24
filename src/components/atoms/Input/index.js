import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const fontSize = ({ height }) => `${height / 35.5555555556}rem`;
const styles = css`
  display: flex;
  flex-basis: 100%;
  width: 100%;
  height: ${props => (props.type === "textarea" ? "auto" : "2.2222222222em")};
  margin: 0;
  padding: ${props =>
    props.type === "textarea" ? "0.4444444444em" : "0 0.4444444444em"};
  border: 1px solid
    ${props => (props.type === "invalid" ? "#f8877f" : "#9e9e9e")};
  border-radius: 2px;
  background-color: "grayscale";
  color: "grayscale";
  font-size: ${fontSize};
  outline: 0;
`;
const StyledTextarea = styled.textarea`
  ${styles}
`;
const StyledInput = styled.input`
  ${styles}
`;

const Input = ({ ...props }) => {
  const { type } = props;
  if (type === "textarea") {
    return <StyledTextarea {...props} />;
  }
  return <StyledInput {...props} />;
};

Input.defaultProps = {
  type: "text",
  height: 40,
};

Input.propsTypes = {
  type: PropTypes.string,
  height: PropTypes.number,
  invalid: PropTypes.bool,
};

export default Input;
