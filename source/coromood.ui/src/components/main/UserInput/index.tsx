import React, { useState } from "react";
import styled from "styled-components";
import { MoodEmojiBar } from "./MoodEmojiBar";
import { ActivityBar } from "./ActivityBar";
import { Mood, Activity } from "../../../shared/Types";

const UInput = styled.div`
  display: flex;
  flex-direction: row;
`;

type SectionVisbility = {
  MoodEmojiBar: boolean;
  activityBar: boolean;
};

type EmotionState = {
  mood: Mood | null;
  activity: Activity | null;
};

export const Index = () => {
  const [activityBarVisibility, setActivityBarVisibility] = useState<
    SectionVisbility
  >({
    MoodEmojiBar: false,
    activityBar: true,
  });

  const [UserEmotion, setUserEmotion] = useState<EmotionState>({
    mood: null,
    activity: null,
  });

  const handleMoodSelected = (mood: Mood) => {
    setUserEmotion({ ...UserEmotion, mood: mood });
    setActivityBarVisibility({
      ...activityBarVisibility,
      MoodEmojiBar: false,
      activityBar: true,
    });
  };

  const handleActivitySelected = (activity: Activity) => {
    setUserEmotion({ ...UserEmotion, activity: activity });
    setActivityBarVisibility({
      ...activityBarVisibility,
      activityBar: false,
    });
  };

  if (activityBarVisibility.MoodEmojiBar)
    return (
      <UInput>
        <MoodEmojiBar moodSelected={(mood: Mood) => handleMoodSelected(mood)} />
      </UInput>
    );
  else if (activityBarVisibility.activityBar)
    return (
      <UInput>
        <ActivityBar
          activitySelected={(activity: Activity) =>
            handleActivitySelected(activity)
          }
        />
      </UInput>
    );
  else
    return (
      <UInput>
        <h2>Thanks for your information</h2>
      </UInput>
    );
};
