import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";

export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";

export type SpinnerThemeProps = {};

export type SpinnerTheme = ComponentTheme<SpinnerThemeProps, never, SpinnerSize>;

export const spinnerTheme = (t?: PartialComponentTheme<SpinnerTheme>): { spinner: SpinnerTheme } => ({
  spinner: extendTheme(emptySpinner, t)
});

const emptySpinner: SpinnerTheme = {
  baseStyle: {
    animation: "spin",
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "full",
    borderWidth: "2px",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  },
  sizes: {
    xs: {
      w: 3,
      h: 3
    },
    sm: {
      w: 4,
      h: 4
    },
    md: {
      w: 6,
      h: 6
    },
    lg: {
      w: 8,
      h: 8
    },
    xl: {
      w: 12,
      h: 12
    }
  },
  variants: {},
  defaultProps: {
    s: "md"
  }
};
