import { PseudoProp } from "utils/PseudoProp";
import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";

export type TypographyVariant = never;
export type TypographySize = never;

export interface TypographyThemeProps extends PseudoProp {
  _h1?: PseudoProp;
  _h2?: PseudoProp;
  _h3?: PseudoProp;
  _h4?: PseudoProp;
  _h5?: PseudoProp;
  _h6?: PseudoProp;
  _p?: PseudoProp;
  _lead?: PseudoProp;
}

export type TypographyTheme = ComponentTheme<TypographyThemeProps, TypographyVariant, TypographySize>;

export const typographyTheme = (c?: PartialComponentTheme<TypographyTheme>): { typography: TypographyTheme } => ({
  typography: t(extendTheme(emptyTypography, c))
});

const t = <T>(t: T) => {
  return t;
};

const emptyTypography: TypographyTheme = {
  baseStyle: {
    _h1: {
      // fontSize: { _: "2.5rem", sm: "3rem" },
      fontSize: "3rem",
      fontWeight: 500,
      // lineHeight: { _: "3.75rem", sm: "4.5rem" },
      lineHeight: "4.5rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h2: {
      // fontSize: { _: "2.25rem", sm: "2.5rem" },
      fontSize: "2.5rem",
      fontWeight: 500,
      // lineHeight: { _: "3.375rem", sm: "3.75rem" },
      lineHeight: "3.75rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h3: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: "3rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: "2rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: "1.875rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h6: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: "1.5rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _p: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      color: "anolis-gray-700",
      fontFamily: "sans"
    },
    _lead: {
      fontSize: "1.5rem",
      lineHeight: "2.25rem",
      fontFamily: "sans"
    }
  },
  sizes: {},
  variants: {},
  defaultProps: {}
};
