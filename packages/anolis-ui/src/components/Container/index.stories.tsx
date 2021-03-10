import { defaultTheme, x } from "@xstyled/emotion";
import React, { FC } from "react";
import StoryLayout from "stories/StoryLayout";
import { Container } from "components/Container/index";

export default {
  title: "Themed/Container"
};

const theme = {
  ...defaultTheme
};

export const Normal: FC = () => {
  return (
    <StoryLayout title="Container">
      <x.div display="flex" spaceX="2" alignItems="center">
        <Container>
          <x.div w="100%" h="10rem" bg="primary" />
        </Container>
      </x.div>
    </StoryLayout>
  );
};

export const Fluid: FC = () => {
  return (
    <StoryLayout title="Container">
      <x.div display="flex" spaceX="2" alignItems="center">
        <Container v="fluid">
          <x.div w="100%" h="10rem" bg="primary" />
        </Container>
      </x.div>
    </StoryLayout>
  );
};
