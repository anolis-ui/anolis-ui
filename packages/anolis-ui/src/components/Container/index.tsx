import { x } from "@xstyled/emotion";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { ElementType, ForwardedRef, ReactElement } from "react";
import { anolisComp } from "utils/anolisComponent";

import { ContainerProps } from "./theme";

export * from "./theme";

export type ContainerComponent = <LC extends ElementType, RC extends ElementType>(props: ContainerProps<LC, RC>) => ReactElement | null;

export const Container: ContainerComponent = anolisComp("Container", (p, ref) => {
  const props = useThemePropsMerge("container", p);

  return (
    <x.div ref={ref} container={p.v === "normal"} {...props} />
  );
});
