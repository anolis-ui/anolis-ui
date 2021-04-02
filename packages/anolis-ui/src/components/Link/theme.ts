import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { ComplementThemeProps } from "components/Complement";
import { PseudoProp } from "utils/PseudoProp";

export type LinkVariant = "normal" | "underlined";

export interface LinkThemeProps extends ComplementThemeProps, PseudoProp {
}

export type LinkTheme = ComponentTheme<LinkThemeProps, LinkVariant>;

export const linkTheme = (t?: PartialComponentTheme<LinkTheme>): { link: LinkTheme } => ({
  link: extendTheme(emptyLink, t)
});

const emptyLink: LinkTheme = {
  baseStyle: {
    color: "primary",
    borderBottom: "1px solid transparent",
    fontSize: "1rem",
    lineHeight: "initial",
    display: "inline-flex",
    transition: "color 300ms, border 300ms",
    cursor: "pointer",
    hoverColor: "primary"
  },
  sizes: {
  },
  variants: {
    normal: {
    },
    underlined: {
      borderBottom: "1px solid",
      borderColor: "primary",
      hoverBorderBottom: "1px solid transparent"
    }
  },
  defaultProps: {
    v: "normal"
  }
};
