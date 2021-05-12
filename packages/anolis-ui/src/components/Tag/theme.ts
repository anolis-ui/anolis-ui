import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { ComplementThemeProps } from "components/Complement";
import { PseudoProp } from "utils/PseudoProp";

export type TagVariant = "solid" | "outline" | "clear";

export interface TagThemeProps extends ComplementThemeProps, PseudoProp {

}

export type TagTheme = ComponentTheme<TagThemeProps, TagVariant>;

export const tagTheme = (t?: PartialComponentTheme<TagTheme>): { tag: TagTheme } => ({
  tag: extendTheme(emptyTag, t)
});

const emptyTag: TagTheme = {
  baseStyle: {
    display: "inline-flex",
    whiteSpace: "nowrap",
    alignItems: "center",
    userSelect: "none",
    transition: "color 300ms, background 300ms, border-color 300ms",
    borderRadius: "0.3rem",
    border: "1px solid",
    borderColor: "anolis-gray-400",
    px: "3",
    fontSize: "sm",
    fontWeight: 500,
    lineHeight: "relaxed",
    _leftIcon: {
      marginLeft: 0,
      marginRight: "0.5rem"
    },
    _rightIcon: {
      marginRight: 0,
      marginLeft: "0.5rem"
    }
  },
  sizes: {},
  variants: {
    solid: {
      bg: "anolis-gray-400",
      color: "white"
    },
    outline: {
      color: "anolis-gray-400"
    },
    clear: {
      borderColor: "transparent",
      color: "anolis-gray-400"
    }
  },
  defaultProps: {
    v: "solid"
  }
};
