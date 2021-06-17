import { defaultTheme, x } from "@xstyled/emotion";
import { FC } from "react";
import StoryLayout from "stories/StoryLayout";

export default {
  title: "Themed/Label"
};

const theme = {
  ...defaultTheme
};

export const Normal: FC = () => {
  return (
    <StoryLayout title="Label">
      <x.div display="flex" spaceX="2" alignItems="center">
      </x.div>
    </StoryLayout>
  );
};
