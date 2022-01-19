import { x } from "@xstyled/emotion";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { ForwardedRef, ReactElement } from "react";
import { anolisComp } from "utils/anolisComponent";

import { SpinnerProps } from "./theme";

export * from "./theme";

export type SpinnerComponent = (props: SpinnerProps) => ReactElement | null;

export const Spinner: SpinnerComponent = anolisComp("Spinner", (p, ref: ForwardedRef<HTMLDivElement>) => {
  const props = useThemePropsMerge("spinner", p);

  return (
    <x.div ref={ref} {...props} />
  );
});
