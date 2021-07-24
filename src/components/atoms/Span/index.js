import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSpan = styled.span`
  font-size: 0.8rem;
  line-height: 1.3;
`;

const Span = ({ children, ...props }) => {
  return <StyledSpan {...props}>{children}</StyledSpan>;
};

Span.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
};

export default Span;
