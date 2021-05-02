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
    color: "anolis-blue-600",
    borderBottom: "1px solid transparent",
    fontSize: "1rem",
    lineHeight: "initial",
    display: "inline-flex",
    alignItems: "center",
    transition: "color 300ms, border 300ms",
    cursor: "pointer",
    hoverColor: "anolis-blue-700",
    textDecoration: "none",
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
  },
  variants: {
    normal: {
    },
    underlined: {
      borderBottom: "1px solid",
      borderColor: "anolis-blue-700",
      hoverBorderBottom: "1px solid transparent"
    }
  },
  defaultProps: {
    v: "normal"
  }
};
