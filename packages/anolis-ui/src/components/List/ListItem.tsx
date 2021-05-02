import Complement, { comp, ComplementProps } from "components/Complement";
import { anolisComponent } from "utils/anolisComponent";
import { useComponentTheme } from "hooks/useComponentTheme";
import { x } from "@xstyled/emotion";

export type ListItemProps = ComplementProps;

export const ListItem = anolisComponent<"li", ListItemProps>("li", (
  { children, v, s, ...p }, ref) => {
  const theme = useComponentTheme("list");

  const [left, props] = comp(p);

  return (
    <x.li ref={ref as any} {...theme._item as any} {...props}>
      <Complement {...theme._item?._leftIcon} {...left} />
      {children}
    </x.li>
  );
});
