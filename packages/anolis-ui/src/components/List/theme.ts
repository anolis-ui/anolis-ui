import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { ComplementThemeProps } from "components/Complement";
import { PseudoProp } from "utils/PseudoProp";
import { Renderable } from "utils/renderComponent";

export type ListVariant = "ordered" | "unordered";

export interface ListThemeProps extends ComplementThemeProps, PseudoProp {
  _bullet?: Renderable;
  _item?: Renderable;
}

export type ListTheme = ComponentTheme<ListThemeProps, ListVariant>;

export const listTheme = (t?: PartialComponentTheme<ListTheme>): { list: ListTheme } => ({
  list: extendTheme(listButton, t)
});

const listButton: ListTheme = {
  baseStyle: {
    lineHeight: "6",
    margin: 0,
    padding: 0,
    _bullet: {
      content: '"\\2022"',
      color: "#152028",
      marginRight: "1.5rem"
    }
  },
  sizes: {},
  variants: {
    ordered: {
      listStyleType: "decimal"
    },
    unordered: {
      listStyleType: "disc"
    }
  },
  defaultProps: {
    v: "unordered"
  }
};
