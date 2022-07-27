import { Menu, Plus } from "@emotion-icons/feather";
import { x } from "@xstyled/emotion";
import { sketch, SketchLayout } from "sketch";

import { Button } from ".";

const Variants = sketch(() => {
  return (
    <SketchLayout
      title="Button"
      description="Button component is used to trigger an action or event. Hover and Active states are made by function Darken (0,025 , 0,05)"
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
            <Button className={c}>Button</Button>
            {c ?? "normal"}
          </x.div>
        ))}
      </x.div>

      <x.div>
        <x.h2>Sizes</x.h2>
        <x.p>Four defined sizes. Padding / height / font size is alterable</x.p>

        <x.div display="flex" gap={6} alignItems="center" flexWrap="wrap" mt={8}>
          {(["xs", "sm", "md", "lg"] as const).map(s => (
            <x.div
              key={s}
              display="flex"
              flexDirection="column"
              fontSize="xs"
              textAlign="center"
              gap={2}
              color="anolis-gray-400"
            >
              <Button s={s}>Button</Button>
              {s.toLocaleUpperCase()}
            </x.div>
          ))}
        </x.div>
      </x.div>

      <x.div>
        <x.h2>Button with Left/Right Complement</x.h2>
        <x.p>Button with Icon placed on right or left</x.p>

        <x.div display="flex" gap={6} alignItems="center" flexWrap="wrap" mt={8}>
          <Button leftIcon={<Plus size={24} />}>Button</Button>
          <Button rightIcon={<Plus size={24} />}>Button</Button>
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
              {(["solid", "outline", "clear", "link"] as const).map(v => (
                <x.td key={v} px={3} py={2}>
                  <Button v={v} className={c}>Button</Button>
                </x.td>
              ))}
              <x.td>
                {c ?? "normal"}
              </x.td>
            </x.tr>
          ))}
        </x.table>
      </x.div>

      <x.div>
        <x.h2>Loading state</x.h2>
        <x.p>
          Loading state of button with spinner and optionally with text <br />{" "}
          Spinner size is set to default size of Icon according to Button size
        </x.p>

        <x.div display="flex" gap={6} alignItems="center" flexWrap="wrap" mt={8}>
          {(["solid", "clear", "outline", "link"] as const).map(v => (
            <x.td key={v} px={3} py={2}>
              <Button v={v} loading></Button>
            </x.td>
          ))}
        </x.div>
        <x.div display="flex" gap={6} alignItems="center" flexWrap="wrap" mt={8}>
          {(["solid", "clear", "outline", "link"] as const).map(v => (
            <x.td key={v} px={3} py={2}>
              <Button v={v} loading>Saving</Button>
            </x.td>
          ))}
        </x.div>
      </x.div>
    </SketchLayout>
  );
});

export default Variants;
