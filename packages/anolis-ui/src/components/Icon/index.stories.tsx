import { x } from "@xstyled/emotion";
import { FC } from "react";
import SketchLayout from "sketch/SketchLayout";

import { Icon } from ".";

export default {
  title: "Unthemed/Icon"
};

export const Normal: FC = () => {
  return (
    <SketchLayout>
      <x.div display="flex" justifyContent="space-around" spaceX="2" flexWrap="wrap">
        <Icon>X</Icon>
      </x.div>
    </SketchLayout>
  );
};
