import { defaultTheme, x } from "@xstyled/emotion";
import { FC } from "react";
import SketchLayout from "sketch/SketchLayout";
import { Container } from "components/Container/index";

export default {
  title: "Themed/Container"
};

const theme = {
  ...defaultTheme
};

export const Normal: FC = () => {
  return (
    <SketchLayout title="Container">
      <x.div display="flex" spaceX="2" alignItems="center">
        <Container>
          <x.div w="100%" h="10rem" bg="primary" />
        </Container>
      </x.div>
    </SketchLayout>
  );
};

export const Fluid: FC = () => {
  return (
    <SketchLayout title="Container">
      <x.div display="flex" spaceX="2" alignItems="center">
        <Container v="fluid">
          <x.div w="100%" h="10rem" bg="primary" />
        </Container>
      </x.div>
    </SketchLayout>
  );
};
