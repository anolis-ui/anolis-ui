import styled, { x } from "@xstyled/emotion";
import Complement, { useComplement } from "components/Complement";
import { TransferedInputPropKey } from "components/Input/theme";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { ElementType, MutableRefObject, ReactElement, useMemo, useRef } from "react";
import { anolisComp } from "utils/anolisComponent";

import { InputProps } from "./theme";

export * from "./theme";

export type InputComponent = <
  Input extends ElementType,
  Textarea extends ElementType,
  LC extends ElementType,
  RC extends ElementType
>(props: InputProps<Input, Textarea, LC, RC>) => ReactElement | null;

export const Input: InputComponent = anolisComp("Input", (p, ref) => {
  const [left, right, {
    children,
    id,
    multiline,
    _textarea,
    _input,
    ...props
  }] = useComplement(useThemePropsMerge("input", p));

  const input = useRef<HTMLInputElement | HTMLTextAreaElement>(null) as MutableRefObject<HTMLInputElement | HTMLTextAreaElement>;

  const [transferedProps, finalProps] = useExtractInputProps(props);

  return (
    <InputStyle
      ref={ref}
      {...finalProps}
      onClick={(e) => {
        input.current.focus();
      }}
    >
      <Complement {...left} />
      {multiline
        ? (
          <x.textarea
            ref={input as MutableRefObject<HTMLTextAreaElement>}
            {..._textarea}
            {...transferedProps}
          />
        )
        : (
          <x.input
            ref={input as MutableRefObject<HTMLInputElement>}
            {..._input}
            {...transferedProps}
          />
        )}
      <Complement {...right} />
    </InputStyle>
  );
});

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
    "checked",
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
