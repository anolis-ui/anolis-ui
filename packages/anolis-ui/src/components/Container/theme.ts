import { ComplementProps } from "components/Complement";
import { ElementType } from "react";
import { AnolisBaseProps } from "utils/anolisComponent";
import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";

export type ContainerVariant = "normal" | "fluid";

export type ContainerProps<LC extends ElementType, RC extends ElementType> =
  & AnolisBaseProps<"div", ContainerVariant>
  & ComplementProps<LC, RC>;

export type ContainerTheme = ComponentTheme<ContainerProps<"div", "div">>;

export const containerTheme = (t?: PartialComponentTheme<ContainerTheme>): { container: ContainerTheme } => ({
  container: extendTheme(emptyContainer, t)
});

const emptyContainer: ContainerTheme = {
  baseStyle: {
    ml: "auto",
    mr: "auto"
  },
  sizes: {},
  variants: {
    normal: {
      w: "100%",
      maxWidth: { "_": "100%", "xxs": "100%", "xs": "100%", "sm": "32em", "md": "40em", "lg": "56em", "xl": "64em", "2xl": "84em" },
      px: { _: 6, sm: 4 }
    },
    fluid: {
      w: "100%",
      px: { _: 6, sm: 4 }
    }
  },
  defaultProps: {
    v: "normal"
  }
};
