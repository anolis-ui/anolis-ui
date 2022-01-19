import { x } from "@xstyled/emotion";
import Complement, { useComplement } from "components/Complement";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { ElementType, ReactElement } from "react";
import { anolisComp } from "utils/anolisComponent";

import { TagProps } from "./theme";

export * from "./theme";

export type TagComponent = <LC extends ElementType, RC extends ElementType>(props: TagProps<LC, RC>) => ReactElement | null;

export const Tag: TagComponent = anolisComp("Tag", (p, ref) => {
  const [left, right, { children, ...props }] = useComplement(useThemePropsMerge("tag", p));

  return (
    <x.div ref={ref} {...props}>
      <Complement {...left} />
      {children}
      <Complement {...right} />
    </x.div>
  );
});
