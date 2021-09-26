import { x } from "@xstyled/emotion";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

import { ContainerThemeProps, ContainerVariant } from "./theme";

export * from "./theme";

export type ContainerProps = AnolisComponentProps<"div", ContainerThemeProps, ContainerVariant>;

export const Container = anolisComponent<"div", ContainerProps>("div", (p, ref) => {
  const props = useThemePropsMerge("container", p);

  return (
    <x.div ref={ref as any} container={p.v === "normal"} {...props} />
  );
});

Container.displayName = "Container";
