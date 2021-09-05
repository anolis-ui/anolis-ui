import { x } from "@xstyled/emotion";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

import { SpinnerThemeProps, SpinnerSize } from "./theme";

export * from "./theme";

export type SpinnerProps = AnolisComponentProps<"div", SpinnerThemeProps, never, SpinnerSize>;

export const Spinner = anolisComponent<"div", SpinnerProps>("div", ({ children, s, ...props }, ref) => {
  const theme = useComponentTheme("spinner", undefined, s);

  return (
    <x.div ref={ref as any} {...theme} {...props} />
  );
});
