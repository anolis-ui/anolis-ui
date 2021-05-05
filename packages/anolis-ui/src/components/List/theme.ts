import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { ComplementThemeProps } from "components/Complement";
import { PseudoProp } from "utils/PseudoProp";
import { SideComplementThemeProps } from "../Complement/index";

export type ListVariant = "ordered" | "unordered";

export interface ListThemeProps extends ComplementThemeProps, PseudoProp {
  _bullet?: any;
  _item?: SideComplementThemeProps & PseudoProp;
}

export type ListTheme = ComponentTheme<ListThemeProps, ListVariant>;

export const listTheme = (t?: PartialComponentTheme<ListTheme>): { list: ListTheme } => ({
  list: extendTheme(emptyList, t)
});

const emptyList: ListTheme = {
  baseStyle: {
    lineHeight: "6",
    margin: 0,
    padding: 0,
    color: "anolis-blue-900",
    _bullet: {
      content: '"\\2022"',
      color: "anolis-blue-900",
      marginRight: "0.8rem"
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
