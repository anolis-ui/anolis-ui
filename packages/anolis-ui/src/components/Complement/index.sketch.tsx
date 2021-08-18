import { x } from "@xstyled/emotion";
import { sketch, SketchLayout } from "sketch";

const Normal = sketch(() => {
  return (
    <SketchLayout>
      <x.div display="flex" justifyContent="space-around" spaceX="2" flexWrap="wrap">
        Empty
      </x.div>
    </SketchLayout>
  );
});

export default Normal;
