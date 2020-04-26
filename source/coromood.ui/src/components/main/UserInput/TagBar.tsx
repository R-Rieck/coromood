import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Tag } from "../../../shared/Types";
import { Tags } from "../../../shared/TestData";

const TagBarWrapper = styled.div`
  width: 60%;
  height: 500;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const TagWrapper = styled.div``;

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
  border: 1px solid gray;
  border-radius: 5px;
  color: gray;
  font-size: 0.8rem;
  padding: 2px;
  margin: 1px 5px 1px 5px;
`;

type TagBarPropType = {
  tagsSelected: (tags: Tag[]) => void;
};

export const TagBar = (props: TagBarPropType) => {
  const [tags, setTags] = useState<Tag[]>(Tags);

  return (
    <TagBarWrapper>
      <Title>Wie sieht dein Tag heute aus?</Title>
      <Caption>
        (z.B. Job, Sport, Hobbys, Familienalltag, Beziehung, Lernen etc.)
      </Caption>
      <TagBarWrapper>
        {tags.map((tag: Tag) => {
          return <TagDiv>{tag.tag}</TagDiv>;
        })}
      </TagBarWrapper>
    </TagBarWrapper>
  );
};
