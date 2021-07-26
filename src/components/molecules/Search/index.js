import React from "react";
import styled from "styled-components";
import Input from "../../atoms/Input";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";

const StyledSearch = styled.div`
  display: flex;
`;

const Search = ({ onSearch, ...props }) => {
  const handelSearch = e => {
    console.log("enter", e.value);
    onSearch(e.value);
  };
  const onClick = () => {
    handelSearch();
  };
  const onKeyPress = event => {
    if (event.key === "Enter") {
      handelSearch(event.target);
    }
  };

  return (
    <StyledSearch>
      <Input type="search" placeholder="Search..." onKeyPress={onKeyPress} />
      <Button type="submit" size="square" color="gray" onClick={onClick}>
        <Image alt="search" size="small" imgSrc="../../images/search.png" />
      </Button>
    </StyledSearch>
  );
};

export default Search;
