import { AnolisBaseProps } from "utils/anolisComponent";
import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";

export type CollapseProps = AnolisBaseProps<"div">;

export type CollapseTheme = ComponentTheme<CollapseProps>;

export const collapseTheme = (c?: PartialComponentTheme<CollapseTheme>): { collapse: CollapseTheme } => ({
  collapse: extendTheme(emptyCollapse, c)
});

const emptyCollapse: CollapseTheme = {
  baseStyle: {},
  sizes: {},
  variants: {},
  defaultProps: {}
};
