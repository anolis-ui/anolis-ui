import { ElementType } from "react";
import { AnolisBaseProps } from "utils/anolisComponent";
import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { ComplementProps } from "../Complement/index";

export type LabelProps<LC extends ElementType, RC extends ElementType> =
  & AnolisBaseProps<"label">
  & ComplementProps<LC, RC>;

export type LabelTheme = ComponentTheme<LabelProps<"div", "div">>;

export const labelTheme = (t?: PartialComponentTheme<LabelTheme>): { label: LabelTheme } => ({
  label: extendTheme(emptyLabel, t)
});

const emptyLabel: LabelTheme = {
  baseStyle: {},
  sizes: {},
  variants: {},
  defaultProps: {}
};
