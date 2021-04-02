import { defaultTheme, x } from "@xstyled/emotion";
import { FC } from "react";
import StoryLayout from "stories/StoryLayout";
import { Link } from ".";

export default {
  title: "Themed/Link"
};

const theme = {
  ...defaultTheme
};

export const Normal: FC = () => {
  return (
    <StoryLayout title="Link">
      <x.div display="flex" spaceX="2" alignItems="center">
        <Link v="normal">
          Normal link
        </Link>

        <Link v="underlined">
          Underlined link
        </Link>
      </x.div>
    </StoryLayout>
  );
};
