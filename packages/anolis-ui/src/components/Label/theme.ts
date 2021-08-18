import { ComplementProps } from "components/Complement";
import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";

export type LabelThemeProps = ComplementProps;

export type LabelTheme = ComponentTheme<LabelThemeProps>;

export const labelTheme = (t?: PartialComponentTheme<LabelTheme>): { label: LabelTheme } => ({
  label: extendTheme(emptyLabel, t)
});

const emptyLabel: LabelTheme = {
  baseStyle: {
  },
  sizes: {
  },
  variants: {
  },
  defaultProps: {
  }
};
