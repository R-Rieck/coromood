import React, { useState } from "react";
import styled from "styled-components";
import angry from "../../../images/moodEmojis/angry.png";
import calm from "../../../images/moodEmojis/calm.png";
import dissapointed from "../../../images/moodEmojis/dissapointed.png";
import happy from "../../../images/moodEmojis/happy.png";
import motivated from "../../../images/moodEmojis/motivated.png";
import notHappy from "../../../images/moodEmojis/notHappy.png";
import sad from "../../../images/moodEmojis/sad.png";
import superMood from "../../../images/moodEmojis/super.png";
import { NextQuestionAction } from "../../shared/NextQuestionAction";

const MoodEmojiBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: 100;
`;

const EmojiBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 900px;
  font-size: 0.8rem;
  font-weight: 100;
`;

const EmojiButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;

  > img {
    height: 50px;
    margin: 10px;
  }

  > p {
    margin: 10px;
  }
`;

enum Mood {
  Sauer,
  Traurig,
  Gestresst,
  Unzufrieden,
  Zufrieden,
  Entspannt,
  Motiviert,
  Super,
}

export const MoodEmojiBar = () => {
  const [moodSelected, setMoodSelected] = useState<Boolean>(true);

  const OnMoodSelect = (mood: Mood) => {
    setMoodSelected(!moodSelected);
  };
  return (
    <MoodEmojiBarWrapper>
      <Title>Wie geht es dir heute?</Title>
      <EmojiBar>
        <EmojiButton onClick={() => OnMoodSelect(Mood.Sauer)}>
          <img src={angry} alt="sauer" />
          <p>Sauer</p>
        </EmojiButton>
        <EmojiButton onClick={() => OnMoodSelect(Mood.Traurig)}>
          <img src={sad} alt="traurig" />
          <p>Traurig</p>
        </EmojiButton>
        <EmojiButton onClick={() => OnMoodSelect(Mood.Gestresst)}>
          <img src={dissapointed} alt="gestresst" />
          <p>Gestresst</p>
        </EmojiButton>
        <EmojiButton onClick={() => OnMoodSelect(Mood.Unzufrieden)}>
          <img src={notHappy} alt="unzufrieden" />
          <p>Unzufrieden</p>
        </EmojiButton>
        <EmojiButton onClick={() => OnMoodSelect(Mood.Zufrieden)}>
          <img src={happy} alt="zufrieden" />
          <p>Zufrieden</p>
        </EmojiButton>
        <EmojiButton onClick={() => OnMoodSelect(Mood.Entspannt)}>
          <img src={calm} alt="entspannt" />
          <p>Entspannt</p>
        </EmojiButton>
        <EmojiButton onClick={() => OnMoodSelect(Mood.Motiviert)}>
          <img src={motivated} alt="motiviert" />
          <p>Motiviert</p>
        </EmojiButton>
        <EmojiButton onClick={() => OnMoodSelect(Mood.Super)}>
          <img src={superMood} alt="super" />
          <p>Super</p>
        </EmojiButton>
      </EmojiBar>

      {!moodSelected ? <></> : <NextQuestionAction />}
    </MoodEmojiBarWrapper>
  );
};
