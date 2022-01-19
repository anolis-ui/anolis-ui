import { ElementType } from "react";
import { AnolisBaseProps } from "utils/anolisComponent";
import { Renderable } from "utils/renderComponent";
import { ComponentTheme, ElementProps, extendTheme, PartialComponentTheme } from "utils/theme";
import { Tag } from "components/Tag";

export type CardVariant = "elevated" | "outlined";

export type CardProps<
  THeader extends ElementType,
  TTitle extends ElementType,
  TTag extends ElementType,
  TMedia extends ElementType,
  TBody extends ElementType,
  TFooter extends ElementType
> = Omit<AnolisBaseProps<"div", CardVariant>, "title"> & {
  $header?: THeader;
  _header?: ElementProps<THeader>;
  header?: Renderable;

  $title?: TTitle;
  _title?: ElementProps<TTitle>;
  title?: Renderable;

  $tag?: TTag;
  _tag?: ElementProps<TTag>;
  tag?: Renderable;

  $media?: TMedia;
  _media?: ElementProps<TMedia>;
  media?: Renderable;

  $body?: TBody;
  _body?: ElementProps<TBody>;
  body?: Renderable;

  $footer?: TFooter;
  _footer?: ElementProps<TFooter>;
  footer?: Renderable;
};

export type CardTheme = ComponentTheme<CardProps<"div", "span", typeof Tag, "div", "div", "div">>;

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

    $header: "div",
    _header: {
      display: "flex",
      order: 1,
      padding: 8,
      pb: 0
    },

    $title: "span",
    _title: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: 600,
      marginBottom: "-0.75rem"
    },

    $tag: Tag,
    _tag: {
      position: "absolute",
      top: 0,
      right: 0,
      alignSelf: "center"
    },

    $media: "div",
    _media: {
      display: "flex",
      order: 2
    },

    $body: "div",
    _body: {
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      order: 3
    },

    $footer: "div",
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
