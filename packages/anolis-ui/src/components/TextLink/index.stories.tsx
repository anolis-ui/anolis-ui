import { defaultTheme, x } from "@xstyled/emotion";
import { FC } from "react";
import SketchLayout from "sketch/SketchLayout";

import { TextLink } from ".";

export default {
  title: "Themed/TextLink"
};

const theme = {
  ...defaultTheme
};

export const Normal: FC = () => {
  return (
    <SketchLayout title="Link">
      <x.div display="flex" spaceX="2" alignItems="center">
        <TextLink v="normal">
          Normal link
        </TextLink>

        <TextLink v="underlined">
          Underlined link
        </TextLink>
      </x.div>
    </SketchLayout>
  );
};
