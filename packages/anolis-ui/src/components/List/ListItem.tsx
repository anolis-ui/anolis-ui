import { x } from "@xstyled/emotion";
import Complement, { SideComplementProps, useSideComplement } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

export type ListItemProps = AnolisComponentProps<"li", SideComplementProps>;

export const ListItem = anolisComponent<"li", ListItemProps>("li", (
  { children, v, s, ...p }, ref) => {
  const theme = useComponentTheme("list");

  const [left, props] = useSideComplement(p, theme._item ?? {});

  return (
    <x.li ref={ref as any} {...theme._item as any} {...props}>
      <Complement {...left} />
      {children}
    </x.li>
  );
});
