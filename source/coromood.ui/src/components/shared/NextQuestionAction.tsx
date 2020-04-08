import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const NextQuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 200px;
  margin: 20px;
`;

const NextButton = styled.button`
  background-color: transparent;
  margin: 0;
  border: 1px solid #b8b8b8;
  border-radius: 25px;
  width: 100px;
  padding: 5px;
  color: #b8b8b8;
`;

const NextText = styled.p`
  color: #63da94;
  margin: 0;
`;

export const NextQuestionAction = () => {
  return (
    <NextQuestionWrapper>
      <NextText>Sehr gut!</NextText>
      <NextButton>
        Weiter <Icon name="long arrow alternate right" size="mini" />
      </NextButton>
    </NextQuestionWrapper>
  );
};
