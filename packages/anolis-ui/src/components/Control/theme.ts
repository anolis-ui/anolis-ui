import { Icon } from "components/Icon";
import { ElementType } from "react";
import { AnolisBaseProps } from "utils/anolisComponent";
import { Renderable } from "utils/renderComponent";
import { ComponentTheme, ElementProps, extendTheme, PartialComponentTheme } from "utils/theme";

export type ControlSizes = "xs" | "sm" | "md" | "lg";

export type ControlProps<Icon extends ElementType> = AnolisBaseProps<"div", never, ControlSizes> & {
  $icon?: Icon;
  _icon?: ElementProps<Icon>;
  icon?: Renderable;
};

export type ControlTheme = ComponentTheme<ControlProps<typeof Icon>>;

export const controlTheme = (c?: PartialComponentTheme<ControlTheme>): { control: ControlTheme } => ({
  control: extendTheme(emptyControl, c)
});

const emptyControl: ControlTheme = {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    role: "group",
    w: "100%",
    position: "relative",
    flexDirection: "column",
    color: "text",
    background: "white",
    maxWidth: "30rem"
  },
  sizes: {
    xs: {},
    sm: {},
    md: {},
    lg: {}
  },
  variants: {},
  defaultProps: {
    s: "md"
  }
};
