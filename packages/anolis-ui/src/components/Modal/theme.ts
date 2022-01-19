import { ElementType } from "react";
import { AnolisBaseProps } from "utils/anolisComponent";
import { Renderable } from "utils/renderComponent";
import { ComponentTheme, ElementProps, extendTheme, PartialComponentTheme } from "utils/theme";

import { CloseControl } from "../Control/CloseControl";

export type ModalSize = "sm" | "md" | "lg" | "full";

export type ModalProps<
  Title extends ElementType,
  Header extends ElementType,
  Close extends ElementType,
  Overlay extends ElementType
> =
  & AnolisBaseProps<"div", never, ModalSize>
  & {
    $title?: Title;
    _title?: ElementProps<Title>;
    title?: Renderable;

    $header?: Header;
    _header?: ElementProps<Header>;
    header?: Renderable;

    $close?: Close;
    _close?: ElementProps<Close>;
    close?: Renderable;

    $overlay?: Overlay;
    _overlay?: ElementProps<Overlay>;
    overlay?: Renderable;

    onClose?: () => unknown;
    persistent?: boolean;
  };

export type ModalTheme = ComponentTheme<ModalProps<"div", "div", typeof CloseControl, "div">>;

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
