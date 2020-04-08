import React, { useState } from "react";
import styled from "styled-components";

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.8rem;
  width: 130px;
`;

const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ChoiceButton = styled.button<ButtonType>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.borderBackground};
  font-weight: bold;
  padding: 5px 15px;
  margin: 5px 5px 5px 0px;
  border-radius: 5px;
  cursor: pointer;
`;

type ButtonType = {
  background: string;
  borderBackground: string;
  color: string;
};

export const ChoiceQuestion = () => {
  const [yesBtn, setYesBtn] = useState<ButtonType>({
    background: "transparent",
    borderBackground: "#B8B8B8",
    color: "#B8B8B8",
  });

  const [noBtn, setNoBtn] = useState<ButtonType>({
    background: "transparent",
    borderBackground: "#B8B8B8",
    color: "#B8B8B8",
  });

  const [buttonClicked, setButtonClicked] = useState<Boolean>(false);

  const handleYesBtnClick = () => {
    if (!buttonClicked) {
      setYesBtn({
        background: "green",
        borderBackground: "green",
        color: "white",
      });
      setButtonClicked(!buttonClicked);
    }
  };

  const handleNoBtnClick = () => {
    if (!buttonClicked) {
      setNoBtn({
        background: "red",
        borderBackground: "red",
        color: "white",
      });
      setButtonClicked(!buttonClicked);
    }
  };

  return (
    <QuestionWrapper>
      <p>trifft auf dich zu?</p>
      <ChoiceWrapper>
        <ChoiceButton
          borderBackground={yesBtn.borderBackground}
          background={yesBtn.background}
          color={yesBtn.color}
          onClick={handleYesBtnClick}
        >
          JA
        </ChoiceButton>
        <ChoiceButton
          borderBackground={noBtn.borderBackground}
          background={noBtn.background}
          color={noBtn.color}
          onClick={handleNoBtnClick}
        >
          NEIN
        </ChoiceButton>
      </ChoiceWrapper>
    </QuestionWrapper>
  );
};
