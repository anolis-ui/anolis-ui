import { defaultTheme, x } from "@xstyled/emotion";
import { sketch, SketchLayout } from "sketch";

import { TextLink } from ".";

const Normal = sketch(() => {
  return (
    <SketchLayout title="Link">
      <x.div display="flex" spaceX="2" alignItems="center">
        <TextLink v="normal">
          Normal link
        </TextLink>

        <TextLink v="underlined">
          Underlined link
        </TextLink>
      </x.div>
    </SketchLayout>
  );
});

export default Normal;
