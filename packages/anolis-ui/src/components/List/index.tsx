import { x } from "@xstyled/emotion";
import { useComplement } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";

import { ListVariant } from "./theme";

export * from "./theme";

export type ListProps = {};

export const List = anolisComponent<"ul", ListProps, ListVariant>("ul", (
  { children, v, ...p }, ref) => {
  const theme = useComponentTheme("list", v);

  return (
    <x.ul ref={ref as any} {...theme as ListProps} {...p}>
      {children}
    </x.ul>
  );
});
