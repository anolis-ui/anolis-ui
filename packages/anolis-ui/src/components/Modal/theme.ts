import { ControlThemeProps } from "components/Control";
import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { TripletProp } from "utils/TripletProps";

export type ModalSize = "sm" | "md" | "lg" | "full";

export type ModalThemeProps =
  & TripletProp<"title">
  & TripletProp<"header">
  & TripletProp<"close", ControlThemeProps>
  & TripletProp<"overlay">;

export type ModalTheme = ComponentTheme<ModalThemeProps, never, ModalSize>;

export const modalTheme = (c?: PartialComponentTheme<ModalTheme>): {modal: ModalTheme} => ({ modal: extendTheme(emptyModal, c) });

const emptyModal: ModalTheme = {
  baseStyle: {
    flexDirection: "column",
    position: "relative",
    bg: "#fff",
    borderRadius: "0.3rem",
    padding: "3rem",
    overflow: "scroll",
    maxHeight: "100%",
    _overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      w: "100%",
      h: "100%",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 3,
      background: "rgba(15, 31, 40, 0.5)"
    },
    _header: {
      fontSize: "2rem",
      lineHeight: "3rem",
      fontFamily: "rubik"
    },
    _close: {
      position: "absolute",
      top: "1rem",
      right: "1rem"
    }
  },
  variants: {},
  sizes: {
    sm: {
      maxWidth: "41rem"
    },
    md: {
      maxWidth: "63rem"
    },
    lg: {
      maxWidth: "85rem"
    },
    full: {
      maxWidth: "none"
    }
  },
  defaultProps: {
    s: "md"
  }
};
