import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { ComplementThemeProps } from "components/Complement";
import { PseudoProp } from "utils/PseudoProp";

export interface LabelThemeProps extends ComplementThemeProps, PseudoProp {
}

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
