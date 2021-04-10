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
  console.log(t);
  return t;
};

const emptyTypography: TypographyTheme = {
  baseStyle: {
    fontFamily: "sans",
    _h1: {
      fontSize: "3.5rem",
      fontWeight: 500,
      lineHeight: "3.75rem",
      color: "#061227"
    },
    _h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
      lineHeight: "3rem",
      color: "#061227"
    },
    _h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: "2.25rem",
      color: "#061227"
    },
    _h4: {

    },
    _h5: {

    },
    _h6: {

    },
    _p: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      color: "#444554"
    },
    _lead: {
      fontSize: "1.5rem",
      lineHeight: "2.25rem"
    }
  },
  sizes: {},
  variants: {},
  defaultProps: {}
};
