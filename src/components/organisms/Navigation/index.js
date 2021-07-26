import React from "react";
import styled from "styled-components";
import LogoImage from "../../atoms/Logo";
import Title from "../../atoms/Title";
import PrimaryNav from "../../molecules/PrimaryNav";

const Wrapper = styled.header`
  display: flex;
  height: 4rem;
  padding: 0.8em 1em;
  background: black;
  color: white;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  > :not(:first-child) {
    margin-left: 1rem;
  }
`;

const Navigation = ({ onSearch, ...props }) => {
  return (
    <Wrapper {...props}>
      <InnerWrapper>
        <LogoImage />
        <Title level={1}>Youtube</Title>

        <PrimaryNav onSearch={onSearch} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Navigation;
