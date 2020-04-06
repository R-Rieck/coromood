import React from "react";
import styled from "styled-components";

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.8rem;
  width: 120px;
`;

const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > button {
    background-color: transparent;
    color: #b8b8b8;
    border: 1px solid #b8b8b8;
    padding: 5px 15px;
    margin: 5px 5px 5px 0px;
    border-radius: 5px;
    cursor: pointer;
  }

  > button:hover {
    background-color: #0000002b;
  }
`;

export const Question = () => {
  return (
    <QuestionWrapper>
      <p>trifft auf dich zu?</p>
      <ChoiceWrapper>
        <button>JA</button>
        <button>NEIN</button>
      </ChoiceWrapper>
    </QuestionWrapper>
  );
};
