import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { ComplementThemeProps } from "components/Complement";
import { PseudoProp } from "utils/PseudoProp";

export type ButtonVariant = "solid" | "clear" | "outline" | "link";
export type ButtonSize = "xs" | "sm" | "md" | "lg";

export interface ButtonThemeProps extends ComplementThemeProps, PseudoProp {
}

export type ButtonTheme = ComponentTheme<ButtonThemeProps, ButtonVariant, ButtonSize>;

export const buttonTheme = (t?: PartialComponentTheme<ButtonTheme>): { button: ButtonTheme } => ({
  button: extendTheme(emptyButton, t)
});

const emptyButton: ButtonTheme = {
  baseStyle: {
    fontWeight: 500,
    fontSize: "base",
    lineHeight: 5,
    borderRadius: "3",
    display: "inline-flex",
    bg: "transparent",
    border: "1px solid transparent",
    transition: "background 300ms, color 300ms, border 300ms, box-shadow 300ms",
    textDecoration: "none",
    alignItems: "center",
    justifyContent: "center",
    cursor: { _: "pointer", disabled: "not-allowed" },
    _leftIcon: {
      marginLeft: 0,
      marginRight: "1rem"
    },
    _rightIcon: {
      marginRight: 0,
      marginLeft: "1rem"
    }
  },
  sizes: {
    xs: {
      py: "0.25rem",
      px: "0.5rem",
      fontSize: "xs",
      lineHeight: "1rem"
    },
    sm: {
      px: "0.75rem",
      py: "0.25rem",
      fontSize: "sm",
      lineHeight: "1.5rem"
    },
    md: {
      px: "2rem",
      py: "0.5rem",
      fontSize: "base",
      lineHeight: "1.5rem"
    },
    lg: {
      px: "8",
      py: "3",
      fontSize: "lg",
      lineHeight: "1.875rem"
    }
  },
  variants: {
    solid: {
      bg: { _: "anolis-blue-600", hover: "anolis-blue-700", active: "anolis-blue-800", focus: "anolis-blue-700" },
      color: "#fff",
      boxShadow: { focus: "inset 0px 0px 0 2px rgba(15, 31, 40, 0.2)" },
      outline: { focus: "none" },
      opacity: { disabled: 0.5 }
    },
    outline: {
      border: "1px solid",
      borderColor: "anolis-blue-600",
      color: { _: "anolis-blue-600", hover: "anolis-blue-700", active: "anolis-blue-800", focus: "anolis-blue-800" } as any,
      bg: { hover: "anolis-blue-50", active: "anolis-blue-100", focus: "anolis-blue-50" },
      boxShadow: { focus: "inset 0px 0px 0 2px rgba(15, 31, 40, 0.2)" },
      outline: { focus: "none" },
      opacity: { disabled: 0.5 }
    },
    clear: {
      color: { _: "anolis-blue-600", hover: "anolis-blue-700", active: "anolis-blue-800", focus: "anolis-blue-800" } as any,
      bg: { hover: "anolis-blue-50", active: "anolis-blue-100", focus: "anolis-blue-50" },
      boxShadow: { focus: "inset 0px 0px 0 2px rgba(15, 31, 40, 0.2)" },
      outline: { focus: "none" },
      opacity: { disabled: 0.5 }
    },
    link: {
      padding: 0,
      color: { _: "anolis-blue-600", hover: "anolis-blue-700", active: "anolis-blue-800", focus: "anolis-blue-800" } as any,
      borderRadius: 0,
      border: 0,
      borderBottom: { _: "1px solid transparent", hover: "1px solid anolis-blue-600" },
      boxShadow: { focus: "inset 0px 0px 0 2px rgba(15, 31, 40, 0.2)" },
      outline: { focus: "none" },
      opacity: { disabled: 0.5 }
    }
  },
  defaultProps: {
    v: "solid",
    s: "md"
  }
};
