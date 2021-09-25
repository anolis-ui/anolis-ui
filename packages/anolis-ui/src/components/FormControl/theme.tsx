import { ComponentTheme, extendTheme, PartialComponentTheme } from "utils/theme";
import { TripletProp } from "utils/TripletProps";

import { InputThemeProps } from "../Input/theme";

export type FormControlThemeProps =
  & TripletProp<"label">
  & TripletProp<"field", InputThemeProps>
  & TripletProp<"help">
  & TripletProp<"error"> & {
    required?: boolean;
  };

export type FormControlTheme = ComponentTheme<FormControlThemeProps>;

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
