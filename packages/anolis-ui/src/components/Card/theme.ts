import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { TripletProp } from "utils/TripletProps";

export type CardVariant = "elevated" | "outlined";

export type CardThemeProps =
  & TripletProp<"header">
  & TripletProp<"title">
  & TripletProp<"tag">
  & TripletProp<"media">
  & TripletProp<"body">
  & TripletProp<"footer">;

export type CardTheme = ComponentTheme<CardThemeProps, CardVariant>;

export const cardTheme = (c?: PartialComponentTheme<CardTheme>): { card: CardTheme } => ({
  card: extendTheme(emptyCard, c)
});

const emptyCard: CardTheme = {
  baseStyle: {
    display: "flex",
    w: "100%",
    position: "relative",
    flexDirection: "column",
    color: "anolis-blue-900",
    background: "white",
    maxWidth: "26rem",
    _header: {
      display: "flex",
      order: 1,
      padding: "2rem",
      pb: 0
    },
    _title: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: 600,
      marginBottom: "-0.75rem"
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
      padding: "2rem",
      paddingTop: 0,
      fontSize: "0.75rem",
      lineHeight: "1.125rem",
      color: "anolis-gray-100"
    }
  },
  sizes: {},
  variants: {
    elevated: {
      borderRadius: "3",
      boxShadow: "0 0.25rem 1rem 0 rgba(6, 18, 39, 0.15)"
    },
    outlined: {
      border: "1px solid rgba(68, 69, 84, 0.25)"
    }
  },
  defaultProps: {
    v: "elevated"
  }
};
