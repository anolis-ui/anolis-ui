import { x } from "@xstyled/emotion";
import { FC } from "react";
import SketchLayout from "sketch/SketchLayout";

export default {
  title: "Internal/Complement"
};

export const Normal: FC = () => {
  return (
    <SketchLayout>
      <x.div display="flex" justifyContent="space-around" spaceX="2" flexWrap="wrap">
        Empty
      </x.div>
    </SketchLayout>
  );
};
