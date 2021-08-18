import { IconProps } from "components/Icon";
import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { TripletProp } from "../../utils/TripletProps";

export type ControlSizes = "xs" | "sm" | "md" | "lg";

export type ControlThemeProps =
  & TripletProp<"icon">;

export type ControlTheme = ComponentTheme<ControlThemeProps, never, ControlSizes>;

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
