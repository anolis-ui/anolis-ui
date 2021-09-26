import { Menu } from "@emotion-icons/feather";
import { x } from "@xstyled/emotion";
import { FC } from "react";
import { sketch, SketchLayout } from "sketch";

import { Checkbox } from ".";

const Variants: FC = sketch(() => {
  return (
    <SketchLayout title="Checkbox">
      <x.div display="flex" spaceX="2" alignItems="center" w="100%">
        <Checkbox s="sm">
          Checkbox SM
        </Checkbox>

        <Checkbox s="md">
          Checkbox MD
        </Checkbox>

        <Checkbox
          s="lg"
          icon={<Menu size={12} />}
          _controlActive={{
            bg: "red"
          }}
        >
          Checkbox LG
        </Checkbox>
      </x.div>
    </SketchLayout>
  );
});

export default Variants;
