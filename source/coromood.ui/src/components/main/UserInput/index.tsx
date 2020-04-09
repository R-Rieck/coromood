import React from "react";
import styled from "styled-components";
import { MoodEmojiBar } from "./MoodEmojiBar";
import { Mood } from "../../../shared/Types";

const UInput = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Index = () => {
  const handleMoodSelected = (mood: Mood) => {
    console.log(Mood[mood]);
  };

  return (
    <UInput>
      <MoodEmojiBar moodSelected={(mood: Mood) => handleMoodSelected(mood)} />
    </UInput>
  );
};
