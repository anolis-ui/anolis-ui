import { x } from "@xstyled/emotion";
import Complement, { useComplement, ComplementProps } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";

export * from "./theme";

export type DropMenuItemProps = ComplementProps;

export const DropMenuItem = anolisComponent<"div", DropMenuItemProps>("div", (
  { children, v, ...p }, ref) => {
  const theme = useComponentTheme("dropMenu", v);

  const [left, right, props] = useComplement(p, theme._item);

  return (
    <x.div ref={ref as any} {...theme._item} {...props}>
      <Complement _icon={theme._item._leftIcon} {...left} />
      {children}
      <Complement _icon={theme._item._rightIcon} {...right} />
    </x.div>
  );
});
