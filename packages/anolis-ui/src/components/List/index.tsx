import { x } from "@xstyled/emotion";
import { comp, ComplementProps } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import { ListVariant } from "./theme";

export * from "./theme";

export type ListProps = ComplementProps & { _bullet?: any; _item?: any };

export const List = anolisComponent<"ul", ListProps, ListVariant>("ul", (
  { children, v, ...p }, ref) => {
  const theme = useComponentTheme("list", v);

  const [,,props] = comp(p);

  return (
    <x.ul
      ref={ref as any}
      {...theme as ListProps}
      {...props}
      {...p}
    >
      {children}
    </x.ul>
  );
});
