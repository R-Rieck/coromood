//rename it
import React from "react";
import styled from "styled-components";
import { Startup } from "./Startup";

const MainWrapper = styled.div`
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  min-width: 375px;
`;

export const Main = () => {
  return (
    <MainWrapper>
      <Startup />
    </MainWrapper>
  );
};
