import React from "react";
import logo from "../images/logo.svg";
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
