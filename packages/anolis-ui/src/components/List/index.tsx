import { x } from "@xstyled/emotion";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

import { ListThemeProps, ListVariant } from "./theme";

export * from "./theme";

export type ListProps = AnolisComponentProps<"ul", ListThemeProps, ListVariant>;

export const List = anolisComponent<"ul", ListProps>("ul", (p, ref) => {
  const props = useThemePropsMerge("list", p);

  return (
    <x.ul ref={ref} {...props} />
  );
});

List.displayName = "List";
