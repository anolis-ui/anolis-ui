import { x } from "@xstyled/emotion";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import { ContainerVariant, ContainerThemeProps } from "./theme";

export * from "./theme";

export type ContainerProps = ContainerThemeProps;

export const Container = anolisComponent<"div", ContainerProps, ContainerVariant>("div", (
  { children, v, s, ...p }, ref) => {
  const theme = useComponentTheme("container", v, s);

  return (
    <x.div ref={ref as any} {...theme} container={v === "normal"} {...p}>
      {children}
    </x.div>
  );
});
