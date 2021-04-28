import { PseudoProp } from "utils/PseudoProp";
import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";

export type CardVariant = "normal" | "elevated" | "outline";

export interface CardThemeProps extends PseudoProp {
  _header?: PseudoProp;
  _title?: PseudoProp;
  _tag?: PseudoProp;
  _media?: PseudoProp;
  _body?: PseudoProp;
  _footer?: PseudoProp;
}

export type CardTheme = ComponentTheme<CardThemeProps, CardVariant>;

export const cardTheme = (c?: PartialComponentTheme<CardTheme>): { card: CardTheme } => ({
  card: extendTheme(emptyCard, c)
});

const emptyCard: CardTheme = {
  baseStyle: {
    display: "flex",
    role: "group",
    w: "100%",
    position: "relative",
    flexDirection: "column",
    color: "text",
    background: "white",
    _header: {
      display: "flex",
      order: 1,
      padding: "1rem"
    },
    _title: {
      fontSize: "2rem",
      lineHeight: "3rem"
    },
    _tag: {
      position: "absolute",
      top: 0,
      right: 0,
      alignSelf: "center"
    },
    _media: {
      display: "flex",
      order: 2
    },
    _body: {
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      order: 3
    },
    _footer: {
      display: "flex",
      order: 4,
      padding: "1rem"
    }
  },
  sizes: {},
  variants: {
    normal: {},
    elevated: {
      borderRadius: "9",
      boxShadow: "0 0.25rem 1rem 0 rgba(6,18,39,0.15)"
    },
    outline: {
      border: "1px solid rgba(68, 69, 84, 0.25)"
    }
  },
  defaultProps: {
    v: "normal"
  }
};
