import styled, { x } from "@xstyled/emotion";
import Complement, { useComplement } from "components/Complement";
import { InputSize, InputVariant, TransferedInputPropKey } from "components/Input/theme";
import { useComponentTheme } from "hooks/useComponentTheme";
import { MutableRefObject, useRef, DOMAttributes, InputHTMLAttributes, useMemo } from "react";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

import { InputThemeProps } from "./theme";

export * from "./theme";

export type InputProps = AnolisComponentProps<"input", InputThemeProps, InputVariant, InputSize>;

export const Input = anolisComponent<"input", InputProps>("input", (
  {
    children,
    v,
    s,
    id,
    placeholder,
    multiline,
    _textarea,
    _input,
    ...p
  }, ref) => {
  const { _textarea: _themeTextarea, _input: _themeInput, ...theme } = useComponentTheme("input", v, s);
  const input = useRef<HTMLInputElement | HTMLTextAreaElement>(null) as MutableRefObject<HTMLInputElement | HTMLTextAreaElement>;

  const [left, right, props, t] = useComplement(p, theme);

  const [transferedProps, finalProps] = useExtractInputProps(props);
  const [transferedTheme, finalTheme] = useExtractInputProps(t);

  return (
    <InputStyle
      {...finalTheme}
      ref={ref as any}
      onClick={() => input.current.focus()}
      {...finalProps}
    >
      <Complement {...theme._leftIcon} {...left} />
      {multiline
        ? (
          <x.textarea
            {..._themeTextarea}
            {...transferedTheme}
            ref={input as MutableRefObject<HTMLTextAreaElement>}
            placeholder={placeholder}
            {..._textarea}
            {...transferedProps}
          />
        )
        : (
          <x.input
            {..._themeInput}
            {...transferedTheme}
            ref={input as MutableRefObject<HTMLInputElement>}
            placeholder={placeholder}
            {..._input}
            {...transferedProps}
          />
        )}
      <Complement {...theme._rightIcon} {...right} />
    </InputStyle>
  );
});

Input.displayName = "Input";

const InputStyle = styled(x.div)`
  input, textarea {
    background: transparent;
    border: none;
    -webkit-appearance: inherit;
    transition: inherit;
    resize: none;
    width: 100%;
    color: inherit;

    &:focus {
      border: none;
      outline: none;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 3rem white inset !important;
    }
  }
`;

export const useExtractInputProps = <T extends object>(props: T) =>
  useMemo(() => extractKeys<T, TransferedInputPropKey>(props, [
    "disabled",
    "readOnly",
    "required",
    "aria-required",
    "aria-invalid",
    "aria-errormessage",
    "aria-activedescendant",
    "aria-autocomplete",
    "aria-haspopup",
    "value",
    "defaultValue",
    "onChange",
    "autoComplete",
    "maxLength",
    "minLength",
    "name",
    "placeholder",
    "inputMode",

    // Clipboard events
    "onCopy",
    "onCut",
    "onPaste",

    // Composition events
    "onCompositionEnd",
    "onCompositionStart",
    "onCompositionUpdate",

    // Selection events
    "onSelect",

    // Input events
    "onBeforeInput",
    "onInput",
    "tabIndex",
    "id",
    "aria-label",
    "aria-labelledby",
    "aria-describedby"
  ]), [props]);

const extractKeys = <T extends object, TKey extends string> (obj: T, keys: TKey[]): [Pick<T, keyof T & TKey>, Omit<T, keyof T & TKey>] => {
  const s = new Set(keys);
  const a: any = [];
  const b: any = [];

  for (const key in obj) {
    (s.has(key as any) ? a : b).push([key, obj[key]]);
  }

  return [Object.fromEntries(a) as any, Object.fromEntries(b) as any];
};
