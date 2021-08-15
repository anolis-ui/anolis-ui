import { x } from "@xstyled/emotion";
import { FC } from "react";
import { sketch } from "sketch";
import SketchLayout from "sketch/SketchLayout";

import { Txt } from "./Txt";

const Normal: FC = sketch(() => {
  return (
    <SketchLayout title="Typography">
      <x.div spaceY="5">
        <x.h1>Test</x.h1>

        <x.h2>H2</x.h2>

        <x.p>Text text text</x.p>

        <Txt t="h1" as="h2">H2 with h1 styles</Txt>

        <Txt t="lead">Leading paragraph</Txt>

        <p>Text text text</p>

        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Simple links for Next.js</a>
      </x.div>
    </SketchLayout>
  );
});

export default Normal;
