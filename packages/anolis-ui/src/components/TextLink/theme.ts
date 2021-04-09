import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { ComplementThemeProps } from "components/Complement";
import { PseudoProp } from "utils/PseudoProp";

export type TextLinkVariant = "normal" | "underlined";

export interface TextLinkThemeProps extends ComplementThemeProps, PseudoProp {
}

export type TextLinkTheme = ComponentTheme<TextLinkThemeProps, TextLinkVariant>;

export const textLinkTheme = (t?: PartialComponentTheme<TextLinkTheme>): { textLink: TextLinkTheme } => ({
  textLink: extendTheme(emptyTextLink, t)
});

const emptyTextLink: TextLinkTheme = {
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
