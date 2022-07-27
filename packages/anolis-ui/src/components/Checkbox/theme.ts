import { SystemProps } from "@xstyled/emotion";
import { IconProps } from "components/Icon";
import { TransferedInputPropKey } from "index";
import { InputHTMLAttributes } from "react";
import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { TripletProp } from "utils/TripletProps";

export type CheckboxVariant = "outline";
export type CheckboxSize = "sm" | "md" | "lg";

export type CheckboxThemeProps =
  & Pick<
  InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
  TransferedInputPropKey
  >
  & TripletProp<"icon", IconProps>
  & TripletProp<"control">
  & TripletProp<"label">
  & {
    _controlActive?: SystemProps;
    _controlFocusRing?: SystemProps;
  };

export type CheckboxTheme = ComponentTheme<CheckboxThemeProps, CheckboxVariant, CheckboxSize>;

export const checkboxTheme = (t?: PartialComponentTheme<CheckboxTheme>): { checkbox: CheckboxTheme } => ({
  checkbox: extendTheme(emptyCheckbox, t)
});

const emptyCheckbox: CheckboxTheme = {
  baseStyle: {
    transition: "border 300ms, background 300ms",
    color: "anolis-gray-600",
    display: "flex",
    alignItems: "center",
    _control: {
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none"
    },
    _controlFocusRing: {
      borderWidth: 2,
      borderColor: "anolis-gray-600"
    },
    _icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    _label: {
      userSelect: "none"
    }
  },
  variants: {
    outline: {
      _control: {
        borderRadius: "sm",
        borderWidth: 1,
        borderColor: { _: "anolis-gray-200", hover: "anolis-gray-300", focusWithin: "anolis-gray-400", groupHover: "anolis-gray-300" }
      },
      _controlActive: {
        bg: "anolis-blue-500",
        borderColor: "anolis-blue-500"
      }
    }
  },
  sizes: {
    sm: {
      _control: {
        w: 3,
        h: 3,
        mr: 3
      }
    },
    md: {
      _control: {
        w: 4,
        h: 4,
        mr: 4
      }
    },
    lg: {
      _control: {
        w: 5,
        h: 5,
        mr: 5
      }
    }
  },
  defaultProps: {
    v: "outline",
    s: "md"
  }
};
