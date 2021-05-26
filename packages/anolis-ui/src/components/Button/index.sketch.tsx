import { Menu } from "@emotion-icons/feather";
import { defaultTheme, x } from "@xstyled/emotion";
import { FC } from "react";
import StoryLayout from "stories/StoryLayout";
import { Button } from "./index";
import { sketch } from "sketch/index";

const Variants: FC = sketch(() => {
  return (
    <StoryLayout title="Button">
      <x.div display="flex" spaceX="2" alignItems="center" flexWrap="wrap">
        <Button v="solid">Solid button</Button>

        <Button v="outline">Outline button</Button>

        <Button v="clear">Clear button</Button>

        <Button v="link">Link button</Button>

        <Button disabled>Disabled Button</Button>

        <Button _rightIcon={{ bg: "red", ml: "4" }} rightIcon={<Menu size={24} />}>Solid button</Button>
      </x.div>
    </StoryLayout>
  );
});

export default Variants;
