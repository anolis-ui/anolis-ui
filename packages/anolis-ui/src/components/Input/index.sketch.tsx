import { x } from "@xstyled/emotion";
import { FC } from "react";
import { sketch, SketchLayout } from "sketch";

import { Input } from ".";

const Normal: FC = sketch(() => {
  return (
    <SketchLayout
      title="Input"
      description="Basic text input component"
    >

      <x.div display="flex" gap={6} alignItems="center" flexWrap="wrap">
        {[undefined, "_hover", "_active", "_focus", "_disabled"].map(c => (
          <x.div
            key={c ?? "normal"}
            display="flex"
            flexDirection="column"
            fontSize="xs"
            textAlign="center"
            gap={2}
            color="anolis-gray-400"
          >
            <Input placeholder="Placeholder" className={c} />
            <Input value="Lorem ipsum" className={c} />
            {c ?? "normal"}
          </x.div>
        ))}
      </x.div>

      <x.div>
        <x.h2>Sizes</x.h2>
        <x.p>Four defined sizes. Padding / height / font size is alterable</x.p>

        <x.div display="flex" flexDirection="column" alignItems="flex-start" gap={4} mt={8}>
          {(["xs", "sm", "md", "lg"] as const).map(s =>
            <Input key={s} placeholder="Placeholder" s={s} />
          )}
        </x.div>
      </x.div>

      <x.div>
        <x.h2>Button variant</x.h2>
        <x.p>
          Solid, outline, clear &amp; link with all states <br />Icon copies the color of the text
        </x.p>

        <x.table mx={-3}>
          {[undefined, "_hover", "_active", "_focus", "_disabled"].map(c => (
            <x.tr
              key={c ?? "normal"}
              fontSize="xs"
              gap={2}
              color="anolis-gray-400"
            >
              {(["outline", "line", "fill", "unstyled"] as const).map(v => (
                <x.td key={v} px={3} py={2}>
                  <Input key={v} placeholder="Placeholder" v={v} className={c} mb={2} />
                  <Input key={v} value="Lorem ipsum" v={v} className={c} />
                </x.td>
              ))}
              <x.td>
                {c ?? "normal"}
              </x.td>
            </x.tr>
          ))}
        </x.table>
      </x.div>

      <x.div display="flex" flexDirection="column" gap={4}>
        <x.div display="flex" gap={6} alignItems="center">
          <Input placeholder="Placeholder" />
          <Input placeholder="Placeholder" />
          <Input placeholder="Placeholder" />
        </x.div>
        <x.div display="flex" spaceX={6} alignItems="center">
          <Input placeholder="Placeholder" />
          <Input placeholder="Placeholder" />
          <Input placeholder="Placeholder" />
        </x.div>
      </x.div>

    </SketchLayout>
  );
});

export default Normal;

const DownIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    {/* eslint-disable-next-line max-len */}
    <path fill="#888AA5" d="M2.29289322,4.29289322 C2.65337718,3.93240926 3.22060824,3.90467972 3.61289944,4.20970461 L3.70710678,4.29289322 L8,8.585 L12.2928932,4.29289322 C12.6533772,3.93240926 13.2206082,3.90467972 13.6128994,4.20970461 L13.7071068,4.29289322 C14.0675907,4.65337718 14.0953203,5.22060824 13.7902954,5.61289944 L13.7071068,5.70710678 L8.70710678,10.7071068 C8.34662282,11.0675907 7.77939176,11.0953203 7.38710056,10.7902954 L7.29289322,10.7071068 L2.29289322,5.70710678 C1.90236893,5.31658249 1.90236893,4.68341751 2.29289322,4.29289322 Z" />
  </svg>
);
