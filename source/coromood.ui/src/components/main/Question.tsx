import React from "react";
import styled from "styled-components";

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Question = () => {
  return <QuestionWrapper>Wie geht es dir heute</QuestionWrapper>;
};
