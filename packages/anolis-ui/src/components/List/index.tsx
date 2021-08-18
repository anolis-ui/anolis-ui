import { x } from "@xstyled/emotion";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";

import { ListVariant, ListThemeProps } from "./theme";

export * from "./theme";

export type ListProps = ListThemeProps;

export const List = anolisComponent<"ul", ListProps, ListVariant>("ul", (
  { children, v, ...p }, ref) => {
  const theme = useComponentTheme("list", v);

  return (
    <x.ul ref={ref as any} {...theme as ListProps} {...p}>
      {children}
    </x.ul>
  );
});
