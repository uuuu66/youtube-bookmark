import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const fontSize = ({ level }) => `${0.75 + 1 * (1 / level)}rem`;

const styles = css`
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
`;

const Title = styled(({ level, children, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`
  ${styles}
`;

Title.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
};

Title.defaultProps = {
  level: 1,
};

export default Title;
