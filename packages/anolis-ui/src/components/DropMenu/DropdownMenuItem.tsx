import { MenuItem, MenuItemProps } from "@reach/menu-button";
import { x } from "@xstyled/emotion";
import Complement, { useComplement, ComplementProps } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import { ComponentProps } from "react";

export * from "./theme";

export interface DropMenuItemProps extends ComplementProps, MenuItemProps {}

export const DropMenuItem = anolisComponent<"div", DropMenuItemProps>("div", (
  { children, v, as, color, ref: _, ...p }, ref) => {
  const theme = useComponentTheme("dropMenu", v);

  const [left, right, props] = useComplement(p, theme._item ?? {});

  return (
    <MenuItem {...p}>
      <x.div ref={ref as any} as={as} {...theme._item} {...props}>
        <Complement _icon={theme._item?._leftIcon} {...left} />
        {children}
        <Complement _icon={theme._item?._rightIcon} {...right} />
      </x.div>
    </MenuItem>
  );
});

type A = ComponentProps<typeof MenuItem>["as"];
