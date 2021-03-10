import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { ComplementThemeProps } from "components/Complement";
import { PseudoProp } from "utils/PseudoProp";

export type ContainerVariant = "normal" | "fluid";

export interface ContainerThemeProps extends ComplementThemeProps, PseudoProp {
}

export type ContainerTheme = ComponentTheme<ContainerThemeProps, ContainerVariant>;

export const containerTheme = (t?: PartialComponentTheme<ContainerTheme>): { container: ContainerTheme } => ({
  container: extendTheme(containerButton, t)
});

const containerButton: ContainerTheme = {
  baseStyle: {
    ml: "auto",
    mr: "auto"
  },
  sizes: {},
  variants: {
    normal: {
      w: "100%",
      maxWidth: { _: "100%", xxs: "100%", xs: "100%", sm: "48em", md: "64em", lg: "78em", xl: "85em", xxl: "94em" },
      px: 3
    },
    fluid: {
      w: "100%",
      px: 3
    }
  },
  defaultProps: {
    v: "normal"
  }
};
