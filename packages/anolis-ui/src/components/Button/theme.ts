import { ComplementProps } from "components/Complement";
import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { TripletProp } from "utils/TripletProps";

import { SpinnerProps } from "../Spinner";

export type ButtonVariant = "solid" | "clear" | "outline" | "link";
export type ButtonSize = "xs" | "sm" | "md" | "lg";

export type ButtonThemeProps =
  & ComplementProps
  & TripletProp<"spinner", SpinnerProps>;

export type ButtonTheme = ComponentTheme<ButtonThemeProps, ButtonVariant, ButtonSize>;

export const buttonTheme = (t?: PartialComponentTheme<ButtonTheme>): { button: ButtonTheme } => ({
  button: extendTheme(emptyButton, t)
});

const emptyButton: ButtonTheme = {
  baseStyle: {
    alignItems: "center",
    bg: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: "sm",
    boxShadow: { focus: "0px 0px 0 2px rgba(15,31,40,0.24)" },
    cursor: { _: "pointer", disabled: "not-allowed" },
    display: "inline-flex",
    fontWeight: 500,
    fontSize: "base",
    justifyContent: "center",
    lineHeight: "normal",
    textDecoration: "none",
    transition: "background 300ms, color 300ms, border 300ms, box-shadow 300ms",
    opacity: { disabled: 0.5 },
    outline: { focus: "none" },
    px: 4,
    py: 2,
    _spinner: {
      s: "sm",
      my: 1
    },
    _leftIcon: {
      marginLeft: 0,
      marginRight: 2
    },
    _rightIcon: {
      marginRight: 0,
      marginLeft: 2
    }
  },
  sizes: {
    xs: {
      fontSize: "xs",
      lineHeight: "none",
      px: 2,
      py: 1,
      _spinner: { s: "xs" }
    },
    sm: {
      fontSize: "sm",
      px: 3,
      py: 1,
      _spinner: { s: "sm" }
    },
    md: {},
    lg: {
      fontSize: "lg",
      lineHeight: "relaxed",
      px: 8,
      py: 3,
      _spinner: { s: "lg" }
    }
  },
  variants: {
    solid: {
      bg: { _: "anolis-blue-600", hover: "anolis-blue-700", active: "anolis-blue-800", focus: "anolis-blue-600" },
      color: "#fff"
    },
    outline: {
      borderWidth: 1,
      borderColor: "current-color",
      bg: { _: "transparent", hover: "anolis-blue-50", active: "anolis-blue-100", focus: "anolis-blue-50" },
      color: { _: "anolis-blue-600", hover: "anolis-blue-700", active: "anolis-blue-800", focus: "anolis-blue-800" }
    },
    clear: {
      bg: { _: "transparent", hover: "anolis-blue-50", active: "anolis-blue-100", focus: "anolis-blue-50" },
      color: { _: "anolis-blue-600", hover: "anolis-blue-700", active: "anolis-blue-800", focus: "anolis-blue-800" }
    },
    link: {
      padding: 0,
      color: { _: "anolis-blue-600", hover: "anolis-blue-700", active: "anolis-blue-800", focus: "anolis-blue-800" },
      bg: { _: "transparent", focus: "anolis-blue-50" },
      borderRadius: 0,
      borderWidth: 0,
      borderBottomWidth: 2,
      boxShadow: "none",
      borderColor: "current-color"
    }
  },
  defaultProps: {
    v: "solid",
    s: "md"
  }
};
