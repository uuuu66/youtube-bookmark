import React from "react";
import styled, { ThemeContext } from "styled-components";
import Link from "../../atoms/Link";
import Search from "../Search";
import Image from "../../atoms/Image";

const StyledNav = styled.nav`
  max-width: 80rem;
  display: flex;
  align-items: center;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 400;
    color: ${props => props.theme.palette.lightgray};
    font-size: 1.25rem;
    &:active {
      color: white;
    }
  }
`;

const PrimaryNav = props => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <StyledNav {...props} theme={theme}>
          <li>
            <Link to="/" exact activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" activeClassName="active">
              Sample page
            </Link>
          </li>
          <Search />
          <Image
            alt="이미지"
            imgSrc="https://yt3.ggpht.com/yti/APfAmoF5LpsxlO9FFDXDiSliICHgjmcYhN0Z-HR91yUMdw=s48-c-k-c0x00ffffff-no-rj"
            size="medium"
            round
          />
        </StyledNav>
      )}
    </ThemeContext.Consumer>
  );
};

export default PrimaryNav;
