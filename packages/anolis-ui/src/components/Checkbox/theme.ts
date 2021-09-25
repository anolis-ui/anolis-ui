import { PseudoProp } from "utils/PseudoProp";
import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { SystemProps } from "@xstyled/emotion";

export type CheckboxVariant = "outline";
export type CheckboxSize = "sm" | "md" | "lg";

export interface CheckboxThemeProps extends PseudoProp {
  control?: SystemProps;
  controlActive?: SystemProps;
}

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
    fontFamily: "sans"
  },
  variants: {
    outline: {
      control: {
        borderRadius: "3",
        border: "1px solid",
        borderColor: { _: "anolis-gray-200", hover: "anolis-gray-300", focusWithin: "anolis-gray-400", groupHover: "anolis-gray-300" },
      }
    }
  },
  sizes: {
    sm: {
      control: {
        borderRadius: "3",
        border: "1px solid",
        borderColor: { _: "anolis-gray-200", hover: "anolis-gray-300", focusWithin: "anolis-gray-400", groupHover: "anolis-gray-300" },
        w: "0.75rem",
        h: "0.75rem",
        mr: "0.75rem"
      },
      controlActive: {
        bg: "anolis-blue-500"
      }
    },
    md: {
      control: {
        borderRadius: "3",
        border: "1px solid",
        borderColor: { _: "anolis-gray-200", hover: "anolis-gray-300", focusWithin: "anolis-gray-400", groupHover: "anolis-gray-300" },
        w: "1rem",
        h: "1rem",
        mr: "1rem"
      },
      controlActive: {
        bg: "anolis-blue-500"
      }
    },
    lg: {
      control: {
        borderRadius: "3",
        border: "1px solid",
        borderColor: { _: "anolis-gray-200", hover: "anolis-gray-300", focusWithin: "anolis-gray-400", groupHover: "anolis-gray-300" },
        w: "1.25rem",
        h: "1.25rem",
        mr: "1.25rem"
      },
      controlActive: {
        bg: "anolis-blue-500"
      }
    }
  },
  defaultProps: {
    v: "outline",
    s: "md"
  }
};
