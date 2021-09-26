import { SystemProps } from "@xstyled/system";
import { TransferedInputPropKey } from "index";
import { InputHTMLAttributes } from "react";
import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { TripletProp } from "utils/TripletProps";

export type SwitchSize = "sm" | "md" | "lg";

export type SwitchThemeProps =
  & Pick<
  InputHTMLAttributes<HTMLInputElement>,
  TransferedInputPropKey
  >
  & TripletProp<"control">
  & TripletProp<"knob">
  & TripletProp<"label">
  & {
    _knobActive?: SystemProps;
    _controlFocusRing?: SystemProps;
  };

export type SwitchTheme = ComponentTheme<SwitchThemeProps, never, SwitchSize>;

export const switchTheme = (t?: PartialComponentTheme<SwitchTheme>): { switch: SwitchTheme } => ({
  switch: extendTheme(emptySwitch, t)
});

const emptySwitch: SwitchTheme = {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    spaceX: 2,
    opacity: { disabled: 0.3 },
    pointerEvents: { disabled: "none" },
    _control: {
      bg: {
        _: "anolis-blue-600",
        groupHover: "anolis-blue-700",
        active: "anolis-blue-800",
        focus: "anolis-blue-700"
      },
      color: {
        _: "anolis-blue-600",
        groupHover: "anolis-blue-700",
        active: "anolis-blue-800",
        focus: "anolis-blue-700"
      },
      borderWidth: 3,
      borderColor: {
        _: "anolis-blue-600",
        groupHover: "anolis-blue-700",
        active: "anolis-blue-800",
        focus: "anolis-blue-700",
        disabled: "anolis-blue-100"
      },
      borderRadius: "full",
      position: "relative"
    },
    _knob: {
      transition: "margin 200ms",
      w: 4,
      h: 4,
      borderRadius: "full",
      bg: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    _knobActive: {
      mr: 0
    },
    _controlFocusRing: {
      bg: "anolis-blue-700",
      boxShadow: "xl"
    },
    _label: {
      userSelect: "none"
    }
  },
  variants: {},
  sizes: {
    sm: {
      _knob: {
        w: 3,
        h: 3,
        mr: 4
      },
      _knobActive: {
        ml: 4
      }
    },
    md: {
      _knob: {
        w: 4,
        h: 4,
        mr: 5
      },
      _knobActive: {
        ml: 5
      }
    },
    lg: {
      _knob: {
        w: 5,
        h: 5,
        mr: 6
      },
      _knobActive: {
        ml: 6
      }
    }
  },
  defaultProps: {
    s: "md"
  }
};
