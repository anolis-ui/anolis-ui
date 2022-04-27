import { Menu, MenuProps } from "@reach/menu-button";
import { FC } from "react";

export * from "./theme";

export const DropMenu: FC<{ children?: MenuProps["children"] }> = ({ children }) => {
  return (
    <Menu>
      {children}
    </Menu>
  );
};
