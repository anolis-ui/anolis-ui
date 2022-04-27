import { useField } from "@react-aria/label";
import { x } from "@xstyled/emotion";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";
import { renderable } from "utils/renderable";

import { FormControlThemeProps } from "./theme";

export * from "./theme";

export type FormControlProps = AnolisComponentProps<"div", FormControlThemeProps>;

export const FormControl = anolisComponent<"div", FormControlProps>("div", (p, ref) => {
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
    label: renderable(label),
    description: renderable(help) ?? "Help text",
    errorMessage: renderable(error) ?? "Error message"
  });

  const FieldComponent = $field ?? x.input;

  return (
    <x.div ref={ref} {...p} data-a-invalid={!!error}>
      {label && (
        <x.label {..._label} {...labelProps}>
          {renderable(label)} {required && "*"}
        </x.label>
      )}

      <FieldComponent {..._field} {...fieldProps} required={required}>
        {renderable(field)}
      </FieldComponent>

      {help && (
        <x.div {..._help} {...descriptionProps}>
          {renderable(help)}
        </x.div>
      )}

      {error && (
        <x.div {..._error} {...errorMessageProps}>
          {renderable(error)}
        </x.div>
      )}

    </x.div>
  );
});

FormControl.displayName = "FormControl";
