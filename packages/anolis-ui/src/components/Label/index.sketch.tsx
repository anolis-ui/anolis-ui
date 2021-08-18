import { x } from "@xstyled/emotion";
import { sketch, SketchLayout } from "sketch";

const Normal = sketch(() => {
  return (
    <SketchLayout title="Label">
      <x.div display="flex" spaceX="2" alignItems="center">
      </x.div>
    </SketchLayout>
  );
});

export default Normal;
