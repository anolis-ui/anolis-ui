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
    color: { _: "anolis-gray-400", hover: "anolis-gray-500", focusWithin: "anolis-gray-600" } as any,
    display: "flex",
    alignItems: "center",
    fontFamily: "sans",
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
        borderRadius: "3",
        border: "1px solid",
        borderColor: { _: "anolis-gray-200", hover: "anolis-gray-300", focusWithin: "anolis-gray-400", groupHover: "anolis-gray-300" }
      }
    }
  },
  sizes: {
    sm: {
      _control: {
        borderRadius: "3",
        border: "1px solid",
        borderColor: { _: "anolis-gray-200", hover: "anolis-gray-300", focusWithin: "anolis-gray-400", groupHover: "anolis-gray-300" },
        w: "0.75rem",
        h: "0.75rem",
        mr: "0.75rem"
      },
      _controlActive: {
        bg: "anolis-blue-500"
      }
    },
    md: {
      _control: {
        borderRadius: "3",
        border: "1px solid",
        borderColor: { _: "anolis-gray-200", hover: "anolis-gray-300", focusWithin: "anolis-gray-400", groupHover: "anolis-gray-300" },
        w: "1rem",
        h: "1rem",
        mr: "1rem"
      },
      _controlActive: {
        bg: "anolis-blue-500"
      }
    },
    lg: {
      _control: {
        borderRadius: "3",
        border: "1px solid",
        borderColor: { _: "anolis-gray-200", hover: "anolis-gray-300", focusWithin: "anolis-gray-400", groupHover: "anolis-gray-300" },
        w: "1.25rem",
        h: "1.25rem",
        mr: "1.25rem"
      },
      _controlActive: {
        bg: "anolis-blue-500"
      }
    }
  },
  defaultProps: {
    v: "outline",
    s: "md"
  }
};
