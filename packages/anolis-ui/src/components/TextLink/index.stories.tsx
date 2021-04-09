import { defaultTheme, x } from "@xstyled/emotion";
import { FC } from "react";
import StoryLayout from "stories/StoryLayout";
import { TextLink } from ".";

export default {
  title: "Themed/TextLink"
};

const theme = {
  ...defaultTheme
};

export const Normal: FC = () => {
  return (
    <StoryLayout title="Link">
      <x.div display="flex" spaceX="2" alignItems="center">
        <TextLink v="normal">
          Normal link
        </TextLink>

        <TextLink v="underlined">
          Underlined link
        </TextLink>
      </x.div>
    </StoryLayout>
  );
};
