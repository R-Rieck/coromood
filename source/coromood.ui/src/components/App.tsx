import React from "react";
import "../styles/App.css";
import { Header } from "./header/Header";
import styled from "styled-components";
import { Main } from "./main/mainView";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 65%;

  @media only screen and (max-width: 400px) {
    width: 100%;
    padding-left: 5px;
  }
`;

export const App = () => {
  return (
    <ContentWrapper>
      <Content>
        <Header />
        <Main />
      </Content>
    </ContentWrapper>
  );
};
