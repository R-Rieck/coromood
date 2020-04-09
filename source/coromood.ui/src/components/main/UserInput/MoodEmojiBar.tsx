import React, { useState, useEffect } from "react";
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
import { Mood } from "../../../shared/Types";

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
  flex-wrap: wrap;
  min-width: 300px;
  max-width: 900px;
  font-size: 0.8rem;
  font-weight: 100;
`;

const EmojiButton = styled.div<imgProps>`
  display: flex;
  flex-direction: column;
  width: 100px;
  margin: 5px;
  align-items: center;
  border: 1px solid #b8b8b8;
  border-radius: 5px;
  cursor: pointer;

  > img {
    height: 50px;
    margin: 10px;
    filter: ${(props: imgProps) =>
      props.imageClicked ? "grayscale(0%)" : "grayscale(100%)"};
  }

  > p {
    margin: 10px;
  }
`;

type imgProps = {
  imageClicked: boolean;
};

type moodProps = {
  angry: {
    mood: Mood;
    isSelected: boolean;
  };
  sad: {
    mood: Mood;
    isSelected: boolean;
  };
  dissapointed: {
    mood: Mood;
    isSelected: boolean;
  };
  notHappy: {
    mood: Mood;
    isSelected: boolean;
  };
  happy: {
    mood: Mood;
    isSelected: boolean;
  };
  calm: {
    mood: Mood;
    isSelected: boolean;
  };
  motivated: {
    mood: Mood;
    isSelected: boolean;
  };
  super: {
    mood: Mood;
    isSelected: boolean;
  };
};

type MoodEmojiBarPropType = {
  moodSelected: (mood: Mood) => void;
};

export const MoodEmojiBar = (prop: MoodEmojiBarPropType) => {
  const [moodSelected, setMoodSelected] = useState<Boolean>(false);
  const [mood, setMood] = useState<moodProps>({
    angry: {
      isSelected: false,
      mood: Mood.Sauer,
    },
    sad: {
      isSelected: false,
      mood: Mood.Traurig,
    },
    dissapointed: {
      isSelected: false,
      mood: Mood.Gestresst,
    },
    notHappy: {
      isSelected: false,
      mood: Mood.Unzufrieden,
    },
    happy: {
      isSelected: false,
      mood: Mood.Zufrieden,
    },
    calm: {
      isSelected: false,
      mood: Mood.Entspannt,
    },
    motivated: {
      isSelected: false,
      mood: Mood.Motiviert,
    },
    super: {
      isSelected: false,
      mood: Mood.Super,
    },
  });

  const handleNextClick = () => {
    const moodType = Object.entries(mood).find((el) => el[1].isSelected);
    if (moodType !== undefined) {
      const selectedMood: Mood = moodType[1].mood;
      prop.moodSelected(selectedMood);
    }
  };

  const OnMoodSelect = () => {
    setMoodSelected(!moodSelected);
  };

  return (
    <MoodEmojiBarWrapper>
      <Title>Wie geht es dir heute?</Title>
      <EmojiBar>
        <EmojiButton
          imageClicked={mood.angry.isSelected}
          onClick={() => {
            if (!moodSelected) {
              OnMoodSelect();
              setMood({
                ...mood,
                angry: { ...mood.angry, isSelected: !mood.angry.isSelected },
              });
            }
          }}
        >
          <img src={angry} alt="sauer" />
          <p>Sauer</p>
        </EmojiButton>
        <EmojiButton
          imageClicked={mood.sad.isSelected}
          onClick={() => {
            if (!moodSelected) {
              OnMoodSelect();
              setMood({
                ...mood,
                sad: { ...mood.sad, isSelected: !mood.sad.isSelected },
              });
            }
          }}
        >
          <img src={sad} alt="traurig" />
          <p>Traurig</p>
        </EmojiButton>
        <EmojiButton
          imageClicked={mood.dissapointed.isSelected}
          onClick={() => {
            if (!moodSelected) {
              OnMoodSelect();
              setMood({
                ...mood,
                dissapointed: {
                  ...mood.dissapointed,
                  isSelected: !mood.dissapointed.isSelected,
                },
              });
            }
          }}
        >
          <img src={dissapointed} alt="gestresst" />
          <p>Gestresst</p>
        </EmojiButton>
        <EmojiButton
          imageClicked={mood.notHappy.isSelected}
          onClick={() => {
            if (!moodSelected) {
              OnMoodSelect();
              setMood({
                ...mood,
                notHappy: {
                  ...mood.notHappy,
                  isSelected: !mood.notHappy.isSelected,
                },
              });
            }
          }}
        >
          <img src={notHappy} alt="unzufrieden" />
          <p>Unzufrieden</p>
        </EmojiButton>
        <EmojiButton
          imageClicked={mood.happy.isSelected}
          onClick={() => {
            if (!moodSelected) {
              OnMoodSelect();
              setMood({
                ...mood,
                happy: { ...mood.happy, isSelected: !mood.happy.isSelected },
              });
            }
          }}
        >
          <img src={happy} alt="zufrieden" />
          <p>Zufrieden</p>
        </EmojiButton>
        <EmojiButton
          imageClicked={mood.calm.isSelected}
          onClick={() => {
            if (!moodSelected) {
              OnMoodSelect();
              setMood({
                ...mood,
                calm: { ...mood.calm, isSelected: !mood.calm.isSelected },
              });
            }
          }}
        >
          <img src={calm} alt="entspannt" />
          <p>Entspannt</p>
        </EmojiButton>
        <EmojiButton
          imageClicked={mood.motivated.isSelected}
          onClick={() => {
            if (!moodSelected) {
              OnMoodSelect();
              setMood({
                ...mood,
                motivated: {
                  ...mood.motivated,
                  isSelected: !mood.motivated.isSelected,
                },
              });
            }
          }}
        >
          <img src={motivated} alt="motiviert" />
          <p>Motiviert</p>
        </EmojiButton>
        <EmojiButton
          imageClicked={mood.super.isSelected}
          onClick={() => {
            if (!moodSelected) {
              OnMoodSelect();
              setMood({
                ...mood,
                super: { ...mood.super, isSelected: !mood.super.isSelected },
              });
            }
          }}
        >
          <img src={superMood} alt="super" />
          <p>Super</p>
        </EmojiButton>
      </EmojiBar>

      {!moodSelected ? (
        <></>
      ) : (
        <NextQuestionAction nextClicked={handleNextClick} />
      )}
    </MoodEmojiBarWrapper>
  );
};
