import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { PseudoProp } from "utils/PseudoProp";
import { ComplementThemeProps } from "components/Complement";

export type InputVariant = "outline" | "line" | "fill" | "unstyled";
export type InputSize = "xs" | "sm" | "md" | "lg";

export interface InputThemeProps extends ComplementThemeProps, PseudoProp {
}

export type InputTheme = ComponentTheme<InputThemeProps, InputVariant, InputSize>;

export const inputTheme = (t?: PartialComponentTheme<InputTheme>): { input: InputTheme } => ({
  input: extendTheme(emptyInput, t)
});

const emptyInput: InputTheme = {
  baseStyle: {
    transition: "border 300ms, background 300ms",
    color: { _: "anolis-gray-400", hover: "anolis-gray-500", focusWithin: "anolis-gray-600" } as any,
    display: "flex",
    alignItems: "center",

    _leftIcon: {
      mr: "1rem"
    },
    _rightIcon: {
      ml: "1rem"
    }
  },
  sizes: {
    xs: {
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
      px: "1rem",
      py: "0.5rem",
      fontSize: "base",
      lineHeight: "1.5rem"
    },
    lg: {
      px: "1rem",
      py: "3",
      fontSize: "lg",
      lineHeight: "1.875rem"
    }
  },
  variants: {
    outline: {
      borderRadius: "3",
      border: "1px solid",
      borderColor: { _: "anolis-gray-200", hover: "anolis-gray-300", focusWithin: "anolis-gray-400" }
    },
    line: {
      borderBottom: "2px solid",
      borderColor: { _: "anolis-gray-400", hover: "anolis-gray-500", focusWithinBorder: "anolis-gray-600" }
    },
    fill: {
      borderRadius: "3",
      border: "1px solid",
      borderColor: { _: "anolis-gray-50", hover: "anolis-gray-100", focusWithinBorder: "anolis-gray-400" },
      bg: { _: "anolis-gray-50", hover: "anolis-gray-100", focusWithin: "#fff" }
    },
    unstyled: {
      padding: 0
    }
  },
  defaultProps: {
    v: "outline",
    s: "md"
  }
};
