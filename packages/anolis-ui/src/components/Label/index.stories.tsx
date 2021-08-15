import { defaultTheme, x } from "@xstyled/emotion";
import { FC } from "react";
import SketchLayout from "sketch/SketchLayout";

export default {
  title: "Themed/Label"
};

const theme = {
  ...defaultTheme
};

export const Normal: FC = () => {
  return (
    <SketchLayout title="Label">
      <x.div display="flex" spaceX="2" alignItems="center">
      </x.div>
    </SketchLayout>
  );
};
