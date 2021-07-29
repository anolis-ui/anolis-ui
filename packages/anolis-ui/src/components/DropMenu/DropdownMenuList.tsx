import { x } from "@xstyled/emotion";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import { MenuItems, MenuPopover } from "@reach/menu-button";
import { positionRight, positionDefault, positionMatchWidth } from "@reach/popover";

export * from "./theme";

export type DropMenuListProps = {
  position?: "left" | "right" | "exactWidth";
};

export const DropMenuList = anolisComponent<"div", DropMenuListProps>("div", (
  { children, v, position, ...p }, ref) => {
  const theme = useComponentTheme("dropMenu", v);

  return (
    <MenuPopover
      position={position === "right" ? positionRight : position === "exactWidth" ? positionMatchWidth : positionDefault}
    >
      <MenuItems>
        <x.div ref={ref as any} {...theme._list} {...position === "exactWidth" && { w: "auto" }} {...p}>
          {children}
        </x.div>
      </MenuItems>
    </MenuPopover>
  );
});
