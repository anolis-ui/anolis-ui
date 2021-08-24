import { Menu } from "@emotion-icons/feather";
import { x } from "@xstyled/emotion";
import { sketch, SketchLayout } from "sketch";

import { Button } from ".";

const Variants = sketch(() => {
  return (
    <SketchLayout title="Button">
      <x.div spaceY="4">
        <x.div display="flex" spaceX="2" alignItems="center" flexWrap="wrap">
          <Button v="solid">Solid button</Button>

          <Button v="outline">Outline button</Button>

          <Button v="clear">Clear button</Button>

          <Button v="link">Link button</Button>

          <Button disabled>Disabled Button</Button>

          <Button _rightIcon={{ bg: "red", ml: "4" }} rightIcon={<Menu size={24} />}>Solid button</Button>
        </x.div>

        <x.div display="flex" spaceX="2" alignItems="center">
          <Button s="xs">XS Button</Button>

          <Button s="sm">SM Button</Button>

          <Button s="md">MD Button</Button>

          <Button s="lg">LG Button</Button>
        </x.div>

        <x.div display="flex" spaceX="2" alignItems="center">
          <Button as="a">Button as a</Button>
          <Button as="a" disabled>Button as a (disabled)</Button>
        </x.div>

        <x.div display="flex" spaceX="2" alignItems="center">
          <Button as="input" type="button" value="Button as input" />
          <Button as="input" type="button" disabled value="Button as input (disabled)" />

          <Button as="input" type="submit" value="Button as input as (submit)" />
        </x.div>
      </x.div>

    </SketchLayout>
  );
});

export default Variants;
