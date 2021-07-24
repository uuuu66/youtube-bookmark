import React from "react";
import PropTypes from "prop-types";
import styled, { css, ThemeContext } from "styled-components";
import { NavLink } from "react-router-dom";

const styles = css`
  text-decoration: none;
  font-weight: 500;
  color: ${props => props.theme.palette.gray};
  &:hover {
    text-decoration: underline;
  }
`;

const StyledNavLink = styled(({ ...props }) => <NavLink {...props} />)`
  ${styles}
`;

const Anchor = styled.a`
  ${styles}
`;

const Link = ({ ...props }) => {
  const { to } = props;
  if (to) {
    return (
      <ThemeContext.Consumer>
        {theme => <StyledNavLink {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  }
  return <Anchor {...props} />;
};

Link.propTypes = {
  to: PropTypes.string,
};

export default Link;
