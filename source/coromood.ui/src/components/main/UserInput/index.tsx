import React from "react";
import styled from "styled-components";
import { MoodEmojiBar } from "./MoodEmojiBar";

const UInput = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Index = () => {
  return (
    <UInput>
      <MoodEmojiBar />
    </UInput>
  );
};
