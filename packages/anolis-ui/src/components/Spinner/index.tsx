import { x } from "@xstyled/emotion";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

import { SpinnerSize, SpinnerThemeProps } from "./theme";

export * from "./theme";

export type SpinnerProps = AnolisComponentProps<"div", SpinnerThemeProps, never, SpinnerSize>;

export const Spinner = anolisComponent<"div", SpinnerProps>("div", (p, ref) => {
  const props = useThemePropsMerge("spinner", p);

  return (
    <x.div ref={ref} {...props} />
  );
});

Spinner.displayName = "Spinner";
