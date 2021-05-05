import { defaultTheme, x } from "@xstyled/emotion";
import { FC } from "react";
import StoryLayout from "stories/StoryLayout";

import { Button } from ".";

export default {
  title: "Themed/Button"
};

const theme = {
  ...defaultTheme
};

export const Variants: FC = () => {
  return (
    <StoryLayout title="Button">
      <x.div display="flex" spaceX="2" alignItems="center" flexWrap="wrap">
        <Button v="solid">Solid button</Button>

        <Button v="outline">Outline button</Button>

        <Button v="clear">Clear button</Button>

        <Button v="link">Link button</Button>

        <Button disabled>Disabled Button</Button>
      </x.div>
    </StoryLayout>
  );
};

export const Sizes: FC = () => {
  return (
    <StoryLayout title="Button">
      <x.div display="flex" spaceX="2" alignItems="center">
        <Button s="xs">XS Button</Button>

        <Button s="sm">SM Button</Button>

        <Button s="md">MD Button</Button>

        <Button s="lg">LG Button</Button>
      </x.div>
    </StoryLayout>
  );
};
