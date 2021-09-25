import { useField } from "@react-aria/label";
import { x } from "@xstyled/emotion";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

import { FormControlThemeProps } from "./theme";

export * from "./theme";

export type FormControlProps = AnolisComponentProps<"div", FormControlThemeProps>;

export const FormControl = anolisComponent<"div", FormControlProps>("div", ({
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
  ...p
}, ref) => {
  const { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField({
    label: label,
    description: help ?? "Help text",
    errorMessage: error ?? "Error message"
  });

  const {
    _label: _themeLabel,
    _help: _themeHelp,
    _error: _themeError,
    field: themeField,
    $field: $themeField,
    _field: _themeField,
    ...theme
  } = useComponentTheme("formControl");

  const FieldComponent = $field ?? $themeField ?? x.input;

  return (
    <x.div {...theme} ref={ref as any} {...p} data-a-invalid={!!error}>
      {label && (
        <x.label {..._themeLabel} {..._label} {...labelProps}>
          {label} {required && "*"}
        </x.label>
      )}

      <FieldComponent {..._field} {..._themeField} {...fieldProps} required={required}>
        {field}
      </FieldComponent>

      {help && (
        <x.div {..._themeHelp} {..._help} {...descriptionProps}>
          {help}
        </x.div>
      )}

      {error && (
        <x.div {..._themeError} {..._error} {...errorMessageProps}>
          {error}
        </x.div>
      )}

    </x.div>
  );
});

FormControl.displayName = "FormControl";
