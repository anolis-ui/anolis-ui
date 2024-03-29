import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { ComplementProps } from "components/Complement";
import { ButtonThemeProps } from "components/Button";
import { TripletProp } from "../../utils/TripletProps";

export type DropMenuThemeProps =
  & ComplementProps
  & TripletProp<"button", ButtonThemeProps>
  & TripletProp<"item", ComplementProps>
  & TripletProp<"list", ComplementProps>;

export type DropMenuTheme = ComponentTheme<DropMenuThemeProps>;

export const dropMenuTheme = (t?: PartialComponentTheme<DropMenuTheme>): { dropMenu: DropMenuTheme } => ({
  dropMenu: extendTheme(emptyDropMenu, t)
});

const emptyDropMenu: DropMenuTheme = {
  baseStyle: {
    _button: {},
    _item: {
      px: "1rem",
      py: "0.5rem",
      bg: { _: "#fff", hover: "anolis-gray-50" },
      transition: "background 300ms",
      maxWidth: "100%",
      cursor: "pointer"
    },
    _list: {
      mt: "0.5rem",
      py: "0.5rem",
      borderRadius: "3",
      bg: "#fff",
      boxShadow: "0 0.125rem 0.5rem 0 rgba(6, 18, 39, 0.15)",
      w: "16rem"
    }
  },
  sizes: {
  },
  variants: {
  },
  defaultProps: {
  }
};
