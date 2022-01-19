import { Input } from "index";
import { ElementType } from "react";
import { ComponentTheme, ElementProps, extendTheme, PartialComponentTheme } from "utils/theme";

import { AnolisBaseProps } from "utils/anolisComponent";
import { Renderable } from "utils/renderComponent";

export type FormControlProps<Label extends ElementType, Field extends ElementType, Help extends ElementType, Error extends ElementType> =
  & AnolisBaseProps<"div">
  & {
    $label?: Label;
    _label?: ElementProps<Label>;
    label?: Renderable;

    $field?: Field;
    _field?: ElementProps<Field>;
    field?: Renderable;

    $help?: Help;
    _help?: ElementProps<Help>;
    help?: Renderable;

    $error?: Error;
    _error?: ElementProps<Error>;
    error?: Renderable;

    required?: boolean;
  };

export type FormControlTheme = ComponentTheme<FormControlProps<"label", typeof Input, "div", "div">>;

export const formControlTheme = (t?: PartialComponentTheme<FormControlTheme>): { formControl: FormControlTheme } => ({
  formControl: extendTheme(emptyInput, t)
});

const emptyInput: FormControlTheme = {
  baseStyle: {
    color: { invalid: "red-600" },
    spaceY: 1,
    _label: {
      fontWeight: "semibold"
    },
    _help: {
      fontSize: "sm"
    },
    _error: {
      fontSize: "sm"
    }
  },
  sizes: {},
  variants: {},
  defaultProps: {}
};
