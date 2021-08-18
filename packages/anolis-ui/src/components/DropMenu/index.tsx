import { Menu } from "@reach/menu-button";
import { FC } from "react";

export * from "./theme";

/** TODO: theme & props??? */
export const DropMenu: FC = ({ children }) => {
  return (
    <Menu>
      {children}
    </Menu>
  );
};
