import { TransInputProps } from "index";
import { ElementType } from "react";
import { AnolisBaseProps } from "utils/anolisComponent";
import { Renderable } from "utils/renderComponent";
import { ComponentTheme, ElementProps, extendTheme, PartialComponentTheme } from "utils/theme";

export type SwitchSize = "sm" | "md" | "lg";

export type SwitchProps<Control extends ElementType, Knob extends ElementType, Label extends ElementType> =
  & AnolisBaseProps<"label", never, SwitchSize>
  & TransInputProps<HTMLInputElement>
  & {
    $control?: Control;
    _control?: ElementProps<Control>;
    _controlActive?: ElementProps<Control>;
    _controlFocusRing?: ElementProps<Control>;
    control?: Renderable;

    $knob?: Knob;
    _knob?: ElementProps<Knob>;
    _knobActive?: ElementProps<Knob>;
    knob?: Renderable;

    $label?: Label;
    _label?: ElementProps<Label>;
    label?: Renderable;
  };

export type SwitchTheme = ComponentTheme<SwitchProps<"div", "div", "div">>;

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
      transition: "background 200ms, color 200ms, border 200ms",
      bg: {
        _: "anolis-gray-200",
        groupHover: "anolis-gray-300",
        active: "anolis-gray-400",
        focus: "anolis-gray-300"
      },
      color: {
        _: "anolis-gray-200",
        groupHover: "anolis-gray-300",
        active: "anolis-gray-400",
        focus: "anolis-gray-300"
      },
      borderWidth: 3,
      borderColor: {
        _: "anolis-gray-200",
        groupHover: "anolis-gray-300",
        active: "anolis-gray-400",
        focus: "anolis-gray-300",
        disabled: "anolis-gray-100"
      },
      borderRadius: "full",
      position: "relative"
    },
    _controlActive: {
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
      borderColor: {
        _: "anolis-blue-600",
        groupHover: "anolis-blue-700",
        active: "anolis-blue-800",
        focus: "anolis-blue-700"
      }
    },
    _controlFocusRing: {
      boxShadow: "xl"
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
