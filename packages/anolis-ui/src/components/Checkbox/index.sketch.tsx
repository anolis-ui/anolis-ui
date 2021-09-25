import { x } from "@xstyled/emotion";
import { FC } from "react";
import StoryLayout from "stories/StoryLayout";
import { Checkbox } from ".";
import { sketch } from "sketch";
import { Menu } from "@emotion-icons/feather";

const Variants: FC = sketch(() => {
  return (
    <StoryLayout title="Checkbox">
      <x.div display="flex" spaceX="2" alignItems="center" w="100%">
        <Checkbox s="sm">
          <x.p>Checkbox SM</x.p>
        </Checkbox>

        <Checkbox s="md">
          <x.p>Checkbox MD</x.p>
        </Checkbox>

        <Checkbox
          s="lg"
          customCheckboxIcon={<Menu size={12} />}
          controlActiveProps={{
            bg: "red"
          }}
        >
          <x.p>Checkbox LG</x.p>
        </Checkbox>
      </x.div>
    </StoryLayout>
  );
});

export default Variants;
