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
    color: { _: "anolis-blue-600", hover: "anolis-blue-700" } as any,
    borderBottom: "1px solid transparent",
    fontSize: "1rem",
    lineHeight: "initial",
    display: "inline-flex",
    alignItems: "center",
    transition: "color 300ms, border 300ms",
    cursor: "pointer",
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
      borderBottom: { _: "1px solid", hover: "1px solid" },
      borderColor: { _: "anolis-blue-700", hover: "transparent" }
    }
  },
  defaultProps: {
    v: "normal"
  }
};
