import { AnolisBaseProps } from "utils/anolisComponent";
import { ComponentTheme, ElementProps, extendTheme, PartialComponentTheme } from "utils/theme";

export type TypographyVariant = "normal" | "prose";
export type TypographySize = never;

export type TypographyProps =
  & AnolisBaseProps<"div", TypographyVariant, never>
  & {
    _h1?: ElementProps<"h1">;

    _h2?: ElementProps<"h2">;

    _h3?: ElementProps<"h3">;

    _h4?: ElementProps<"h4">;

    _h5?: ElementProps<"h5">;

    _h6?: ElementProps<"h6">;

    _p?: ElementProps<"p">;

    _lead?: ElementProps<"p">;
  };

export type TxtProps =
  & AnolisBaseProps<"p">
  & {
    t: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "lead";
  };

export type TypographyTheme = ComponentTheme<TypographyProps>;

export const typographyTheme = (c?: PartialComponentTheme<TypographyTheme>): { typography: TypographyTheme } => ({
  typography: extendTheme(emptyTypography, c)
});

const emptyTypography: TypographyTheme = {
  baseStyle: {
    _h1: {
      fontSize: { _: "2.5rem", sm: "3rem" },
      fontWeight: 500,
      lineHeight: { _: "3rem", sm: "3.6rem" },
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
      lineHeight: "3rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h3: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: "2.4rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: "1.8rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: "1.5rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h6: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: "1.2rem",
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
  variants: {
    normal: {},
    prose: {

    }
  },
  defaultProps: {}
};
