import { Menu } from "@reach/menu-button";
import { ComplementProps } from "components/Complement";
import { FC } from "react";

export * from "./theme";

export type DropMenuItemProps = ComplementProps;

export const DropMenu: FC = ({ children }) => {
  return (
    <Menu>
      {children}
    </Menu>
  );
};
