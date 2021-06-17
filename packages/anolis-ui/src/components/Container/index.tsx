import { x } from "@xstyled/emotion";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import { ContainerVariant } from "./theme";

export * from "./theme";

export type ContainerProps = {};

export const Container = anolisComponent<"div", ContainerProps, ContainerVariant>("div", (
  { children, v, s, ...p }, ref) => {
  const theme = useComponentTheme("container", v, s);

  return (
    <x.div ref={ref as any} {...theme} container={v === "normal"} {...p}>
      {children}
    </x.div>
  );
});
