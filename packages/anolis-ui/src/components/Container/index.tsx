import { x } from "@xstyled/emotion";
import Complement, { comp, ComplementProps } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import { ContainerVariant } from "./theme";

export * from "./theme";

export type ContainerProps = ComplementProps;

export const Container = anolisComponent<"div", ContainerProps, ContainerVariant>("div", (
  { children, v, s, ...p }, ref) => {
  const theme = useComponentTheme("container", v, s);

  const [,,props] = comp(p);

  return (
    <x.div ref={ref as any} {...theme as ContainerProps} container={v === "normal"} {...props}>
      {children}
    </x.div>
  );
});
