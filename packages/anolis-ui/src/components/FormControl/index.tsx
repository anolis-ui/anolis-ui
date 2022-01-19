import { useField } from "@react-aria/label";
import { x } from "@xstyled/emotion";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { ElementType, ReactElement } from "react";
import { anolisComp } from "utils/anolisComponent";

import { FormControlProps } from "./theme";

export * from "./theme";

type FormControlComponent = <
  Label extends ElementType,
  Field extends ElementType,
  Help extends ElementType,
  Error extends ElementType
>(props: FormControlProps<Label, Field, Help, Error>) => ReactElement | null;

export const FormControl: FormControlComponent = anolisComp("FormControl", (p, ref) => {
  const {
    children,
    label,
    _label,
    _help,
    _error,
    field,
    $field,
    _field,
    help,
    error,
    required,
    ...props
  } = useThemePropsMerge("formControl", p);

  const { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField({
    label: label,
    description: help ?? "Help text",
    errorMessage: error ?? "Error message"
  });

  const FieldComponent = $field ?? x.input;

  return (
    <x.div ref={ref} {...props} data-a-invalid={!!error}>
      {label && (
        <x.label {..._label} {...labelProps}>
          {label} {required && "*"}
        </x.label>
      )}

      <FieldComponent {..._field} {...fieldProps} required={required}>
        {field}
      </FieldComponent>

      {help && (
        <x.div {..._help} {...descriptionProps}>
          {help}
        </x.div>
      )}

      {error && (
        <x.div {..._error} {...errorMessageProps}>
          {error}
        </x.div>
      )}

    </x.div>
  );
});
