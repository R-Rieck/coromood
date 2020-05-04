import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Tag } from "../../../shared/Types";
import { Tags } from "../../../shared/TestData";
import { NextQuestionAction } from "../../shared/NextQuestionAction";

const TagBarWrapper = styled.div`
  width: 80%;
  height: 500;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TagWrapper = styled.div`
  display: inline-flex;
  /* align-items: center; */
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
  `;

const Title = styled.h2`
  font-weight: 100;
  margin: 0;
`;

const Caption = styled.h3`
  color: #b8b8b8;
  font-size: 0.8rem;
  font-weight: 100;
`;

const TagDiv = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  color: #9f9f9f;
  font-size: 0.9rem;
  font-weight: 100;
  padding: 5px;
  cursor: pointer;
  margin: 3px;
`;

const InputDiv = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`

const InputTextbox = styled.input`
  width: 80%;
  height: 20px; 
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
`;

const InputSubmitButton =styled.button`
  height: 42px;
  width:15%;
  padding: 10px;
  background-color: #77d9a0;
  color: white;
  border-radius: 5px;
  border: 1px solid #d1d1d1;
  font-size: 1rem;
`;

type TagBarPropType = {
  tagsSelected: (tags: Tag[]) => void;
};

export const TagBar = (props: TagBarPropType) => {
  const [tags, setTags] = useState<Tag[]>(Tags);

  const handleNextClick = () => {}

  return (
    <TagBarWrapper>
      <Title>Wie sieht dein Tag heute aus?</Title>
      <Caption>
        (z.B. Job, Sport, Hobbys, Familienalltag, Beziehung, Lernen etc.)
      </Caption>
      <TagWrapper>
        {tags.map((tag: Tag) => {
          return <TagDiv>{tag.tag}</TagDiv>;
        })}
      </TagWrapper>
      <p><strong>... oder gib etwas ein!</strong></p>
      <InputDiv>
        <InputTextbox type="text" placeholder="z.B. Tischtennis, basteln, ..." />
        <InputSubmitButton>Fertig!</InputSubmitButton>
      </InputDiv>

      <NextQuestionAction nextClicked={handleNextClick} />
    </TagBarWrapper>
  );
};
