import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";

export type CollapseThemeProps = {};

export type CollapseTheme = ComponentTheme<CollapseThemeProps>;

export const collapseTheme = (c?: PartialComponentTheme<CollapseTheme>): { collapse: CollapseTheme } => ({
  collapse: extendTheme(emptyCollapse, c)
});

const emptyCollapse: CollapseTheme = {
  baseStyle: {},
  sizes: {},
  variants: {},
  defaultProps: {}
};
