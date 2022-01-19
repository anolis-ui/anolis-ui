import { DefaultTheme, SystemProp } from "@xstyled/emotion";
import { SystemProps } from "@xstyled/system";
import { ElementType } from "react";
import { AnolisBaseProps } from "utils/anolisComponent";
import { Renderable } from "utils/renderComponent";
import { ComponentTheme, ElementProps, extendTheme, PartialComponentTheme } from "utils/theme";

import { ListItem } from "./ListItem";

export type ListVariant = "ordered" | "unordered";

export type ListProps<Item extends ElementType> =
  & AnolisBaseProps<"ul" | "ol", ListVariant>
  & {
    $item?: Item;
    _item?: ElementProps<Item>;
    item?: Renderable[];
  };

export type ListItemProps<Icon extends ElementType> =
  & AnolisBaseProps<"li">
  & {
    $icon?: Icon;
    _icon?: ElementProps<Icon>;
    icon?: Icon;

    $marker?: never;
    _marker?: MarkerProps;
    marker?: never;
  };

type MarkerPropKeys =
  | "fontFamily"
  | "fontSize"
  | "fontStyle"
  | "fontWeight"
  | "lineHeight"
  | "whiteSpace"
  | "color"
  | "animation"
  | "animationDuration"
  | "animationTimingFunction"
  | "transition"
  | "transitionDelay"
  | "transitionDuration"
  | "transitionProperty"
  | "transitionTimingFunction";

type MarkerProps =
  & Pick<SystemProps, MarkerPropKeys>
  & {
    content?: SystemProp<string, DefaultTheme>;
  };

export type ListTheme = ComponentTheme<ListProps<typeof ListItem>>;

export const listTheme = (t?: PartialComponentTheme<ListTheme>): { list: ListTheme } => ({
  list: extendTheme(emptyList, t)
});

const emptyList: ListTheme = {
  baseStyle: {
    lineHeight: "6",
    margin: 0,
    padding: 0,
    color: "anolis-blue-900"
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
