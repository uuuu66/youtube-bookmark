import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../atoms/Input";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";

const StyledSearch = styled.div`
  display: flex;
`;

const Search = ({ onSearch, ...props }) => {
  const [input, setInput] = useState("");

  const onChange = e => {
    setInput(e.target.value);
  };

  const handelSearch = () => {
    onSearch(input);
  };

  const onClick = () => {
    handelSearch();
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      handelSearch();
    }
  };

  return (
    <StyledSearch>
      <Input
        type="search"
        placeholder="Search..."
        value={input}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <Button type="submit" size="square" color="gray" onClick={onClick}>
        <Image alt="search" size="small" imgSrc="../../images/search.png" />
      </Button>
    </StyledSearch>
  );
};

export default Search;
