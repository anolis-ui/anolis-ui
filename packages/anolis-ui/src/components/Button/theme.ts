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
    borderRadius: "default",
    display: "inline-flex",
    bg: "transparent",
    border: "1px solid transparent",
    transition: "background 300ms, color 300ms, border 300ms, box-shadow 300ms",
    cursor: "pointer",
    textDecoration: "none",
    alignItems: "center",
    disabledCursor: "not-allowed"
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
      bg: "anolis-blue",
      color: "#fff",
      hoverBg: "primaryHover",
      activeBg: "primaryActive",
      focusBg: "primaryFocus",
      focusOutline: "2px solid rgba(15, 31, 40, 0.2)",
      // focusOutlineOffset: "-2px",
      disabledOpacity: 0.5
    },
    outline: {
      border: "1px solid",
      borderColor: "primary",
      color: "primary",
      hoverBg: "rgba(1, 113, 182, 0.1)",
      activeBg: "rgba(1, 113, 182, 0.2)",
      focusBg: "rgba(1, 113, 182, 0.2)",
      focusOutline: "2px solid rgba(15, 31, 40, 0.2)",
      // focusoutlineOffset: "-2px",
      disabledOpacity: 0.5
    },
    clear: {
      color: "primary",
      hoverBg: "rgba(1, 113, 182, 0.1)",
      activeBg: "rgba(1, 113, 182, 0.2)",
      focusBg: "rgba(1, 113, 182, 0.2)",
      focusOutline: "2px solid rgba(15, 31, 40, 0.2)",
      // focusoutlineOffset: "-2px",
      disabledOpacity: 0.5
    },
    link: {
      padding: 0,
      color: "primary",
      borderRadius: 0,
      border: 0,
      borderBottom: "1px solid transparent",
      hoverBorderBottom: "1px solid",
      hoverBorderColor: "primary",
      activeColor: "#036199",
      focusOutline: "2px solid rgba(15, 31, 40, 0.2)",
      // focusOutlineOffset: "-2px",
      disabledOpacity: 0.5
    }
  },
  defaultProps: {
    v: "solid",
    s: "md"
  }
};
