import { x } from "@xstyled/emotion";
import Complement, { comp, ComplementProps } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import { ListVariant } from "./theme";

export * from "./theme";

export type ListProps = ComplementProps;

export const List = anolisComponent<"div", ListProps, ListVariant>("div", (
  { children, v, s, ...p }, ref) => {
  const theme = useComponentTheme("list", v);

  const [props] = comp(p);

  return (
    <x.div
      ref={ref as any}
      {...theme as ListProps}
      {...props}
      {...p}
    >
      {children}
    </x.div>
  );
});
