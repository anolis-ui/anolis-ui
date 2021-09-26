import { MenuItem, MenuItemProps } from "@reach/menu-button";
import { x } from "@xstyled/emotion";
import Complement, { ComplementProps, useComplement } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { ComponentProps } from "react";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

export * from "./theme";

export type DropMenuItemProps = AnolisComponentProps<"div", ComplementProps & MenuItemProps>;

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

DropMenuItem.displayName = "DropMenuItem";
