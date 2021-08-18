import { Activity } from "@emotion-icons/feather";
import { x } from "@xstyled/emotion";
import { sketch, SketchLayout } from "sketch";

import { Control } from ".";

const Normal = sketch(() => {
  return (
    <SketchLayout title="Card">
      <x.div display="flex" justifyContent="space-around" spaceX="2" flexWrap="wrap">
        <Control icon={<Activity />} />
      </x.div>
    </SketchLayout>
  );
});

export default Normal;
