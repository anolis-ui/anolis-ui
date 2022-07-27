import { Menu } from "@emotion-icons/feather";
import { x } from "@xstyled/emotion";
import { FC } from "react";
import { sketch, SketchLayout } from "sketch";

import { Checkbox } from ".";

const Variants: FC = sketch(() => {
  return (
    <SketchLayout
      title="Checkbox"
      description="Checkbox component for use in forms to select multiple values from options"
    >
      <x.div display="flex" gap={8} alignItems="center">
        <Checkbox>Checkbox</Checkbox>
        <Checkbox className="_hover">Checkbox</Checkbox>
        <Checkbox checked>Checkbox</Checkbox>
      </x.div>

      <x.div>
        <x.h2>Sizes</x.h2>
        <x.p>Checkbox has 3 default sizes: sm, md or lg</x.p>
        <x.div display="flex" gap={8} alignItems="center" mt={8}>
          <Checkbox s="sm">SM Checkbox</Checkbox>
          <Checkbox>MD Checkbox</Checkbox>
          <Checkbox s="lg">LG Checkbox</Checkbox>
        </x.div>
      </x.div>
    </SketchLayout>
  );
});

export default Variants;
