import React from "react";
import styled from "styled-components";
import quarantine from "../../images/quarantine.png";
import { Card, Icon } from "semantic-ui-react";
import { ChoiceQuestion } from "../shared/ChoiceQuestion";
import { Share } from "../shared/Share";

const StartupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  .card {
    margin: 100px;
    width: 300px;
    font-size: 1.7rem;
    color: #7f7f7f;
  }

  .meta {
    font-size: 0.8rem;
    margin-top: 50px;
    color: #cacaca;
  }
`;

const Title = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 3rem;
  margin: 5px;
`;

const Caption = styled.h3`
  color: #7f7f7f;
  font-weight: 100;
  margin: 5px;
`;

const QuestionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  flex-direction: row-reverse;
  justify-content: space-evenly;

  > img {
    height: 500px;
    width: 600px;
  }

  @media only screen and (max-width: 375px) {
    justify-content: center;
    > img {
      height: 300px;
    }
  }
`;

export const Startup = () => {
  return (
    <StartupWrapper>
      <Caption>Stimmungstagebuch für Kriesenzeiten</Caption>
      <Title>Ein Leben in Quarantäne</Title>
      <QuestionWrapper>
        <img src={quarantine}></img>
        <Card>
          <Card.Content>
            <Card.Header>
              Klasse! Diese Woche sind deine Mitmenschen{"  "}
              <span style={{ color: "#63DA94" }}>36% zufriedener</span> als in
              der letzten Woche.
            </Card.Header>
            <Card.Description>
              <ChoiceQuestion />
            </Card.Description>
            <Card.Meta>
              <Share />
            </Card.Meta>
          </Card.Content>
        </Card>
      </QuestionWrapper>
    </StartupWrapper>
  );
};
