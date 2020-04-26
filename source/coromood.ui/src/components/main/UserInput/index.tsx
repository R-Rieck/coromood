import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MoodEmojiBar } from "./MoodEmojiBar";
import { ActivityBar } from "./ActivityBar";
import { Mood, Activity, Tag } from "../../../shared/Types";
import { TagBar } from "./TagBar";

const UInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

type SectionVisbility = {
  moodEmojiBar: boolean;
  activityBar: boolean;
  tagBar: boolean;
};

type EmotionState = {
  mood: Mood | null;
  activity: Activity | null;
  tags: Tag[] | null;
};

export const Index = () => {
  const [activityBarVisibility, setActivityBarVisibility] = useState<
    SectionVisbility
  >({
    moodEmojiBar: false,
    activityBar: false,
    tagBar: true,
  });

  const [UserEmotion, setUserEmotion] = useState<EmotionState>({
    mood: null,
    activity: null,
    tags: null,
  });

  const handleMoodSelected = (mood: Mood) => {
    setUserEmotion({ ...UserEmotion, mood: mood });
    setActivityBarVisibility({
      ...activityBarVisibility,
      moodEmojiBar: false,
      activityBar: true,
    });
  };

  const handleActivitySelected = (activity: Activity) => {
    setUserEmotion({ ...UserEmotion, activity: activity });
    setActivityBarVisibility({
      ...activityBarVisibility,
      activityBar: false,
      tagBar: true,
    });
  };

  const handleTagSelected = (tags: Tag[]) => {
    setUserEmotion({ ...UserEmotion, tags: tags });
    setActivityBarVisibility({
      ...activityBarVisibility,
      tagBar: false,
    });
  };

  useEffect(() => console.log(UserEmotion), [UserEmotion]);

  if (activityBarVisibility.moodEmojiBar)
    return (
      <UInput>
        <MoodEmojiBar moodSelected={(mood: Mood) => handleMoodSelected(mood)} />
      </UInput>
    );

  if (activityBarVisibility.activityBar)
    return (
      <UInput>
        <ActivityBar
          activitySelected={(activity: Activity) =>
            handleActivitySelected(activity)
          }
        />
      </UInput>
    );

  if (activityBarVisibility.tagBar)
    return (
      <UInput>
        <TagBar tagsSelected={(tags: Tag[]) => handleTagSelected(tags)} />
      </UInput>
    );
  else
    return (
      <UInput>
        <h2>Thanks for your information</h2>
      </UInput>
    );
};
