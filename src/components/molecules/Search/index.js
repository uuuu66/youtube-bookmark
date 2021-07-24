import React from "react";
import styled from "styled-components";
import Input from "../../atoms/Input";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";

const StyledSearch = styled.div`
  display: flex;
`;

const Search = props => {
  return (
    <StyledSearch>
      <Input type="search" placeholder="Search..." />
      <Button type="submit" size="square" color="gray">
        <Image alt="search" size="small" imgSrc="../../images/search.png" />
      </Button>
    </StyledSearch>
  );
};

export default Search;
