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
      maxWidth: { "_": "100%", "xxs": "100%", "xs": "100%", "sm": "32em", "md": "40em", "lg": "56em", "xl": "64em", "2xl": "88em" },
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
