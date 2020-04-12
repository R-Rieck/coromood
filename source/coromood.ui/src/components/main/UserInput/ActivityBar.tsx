import React from "react";
import { Activity } from "../../../shared/Types";
import styled from "styled-components";
import activity from "../../../images/activity/activity.svg";
import baer from "../../../images/activity/baer.svg";
import blume from "../../../images/activity/blume.svg";
import couch from "../../../images/activity/couch.svg";
import fist from "../../../images/activity/fist.svg";

const ActivityBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const SliderWrapper = styled.div`
  width: 60%;

  .slider {
    -webkit-appearance: none;
    width: 90%;
    height: 5px;
    background: #f1f1f1;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    background: #ffb200;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #ffb200;
    border-radius: 25px;
    cursor: pointer;
  }
`;

const SliderInputWrapper = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 25px;
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    height: 50px;
    filter: grayscale(100%);
  }
`;

type ActivityBarPropTypes = {
  activitySelected: (activity: Activity) => void;
};

export const ActivityBar = (props: ActivityBarPropTypes) => {
  return (
    <ActivityBarWrapper>
      <Title>Wie aktiv fühlst du dich diese Woche?</Title>
      <Caption>
        (z.B. Job, Sport, Hobbys, Familienalltag, Beziehung, Lernen etc.)
      </Caption>
      <SliderWrapper>
        <IconBarWrapper>
          <IconWrapper>
            <img src={baer} />
            <p>Out of Order</p>
          </IconWrapper>
          <IconWrapper>
            <img src={couch} />
            <p>Couch Potato</p>
          </IconWrapper>
          <IconWrapper>
            <img src={blume} />
            <p>Ausgeglichen</p>
          </IconWrapper>
          <IconWrapper>
            <img src={fist} />
            <p>Produktiv!</p>
          </IconWrapper>
          <IconWrapper>
            <img src={activity} />
            <p>Super Aktiv!</p>
          </IconWrapper>
        </IconBarWrapper>
        <SliderInputWrapper>
          <input className="slider" type="range" min="0" max="4" step="1" />
        </SliderInputWrapper>
      </SliderWrapper>
    </ActivityBarWrapper>
  );
};
