import styled, { SystemProps, x } from "@xstyled/emotion";
import Complement, { useComplement } from "components/Complement";
import { InputSize, InputVariant } from "components/Input/theme";
import { useComponentTheme } from "hooks/useComponentTheme";
import { ComponentProps, InputHTMLAttributes, MutableRefObject, TextareaHTMLAttributes, useRef } from "react";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

import { InputThemeProps } from "./theme";

export * from "./theme";

export type InputProps = AnolisComponentProps<"input", InputThemeProps&{
  placeholder?: string;
  multiline?: boolean;
  _textarea?: SystemProps | Partial<TextareaHTMLAttributes<any>>;
  _input?: SystemProps | Partial<InputHTMLAttributes<any>>;
}, InputVariant, InputSize>;

export const Input = anolisComponent<"input", InputProps>("input", (
  {
    children,
    v,
    s,
    placeholder,
    multiline,
    _textarea,
    _input,
    ...p
  }, ref) => {
  const theme = useComponentTheme("input", v, s);
  const input = useRef<HTMLInputElement | HTMLTextAreaElement>(null) as MutableRefObject<HTMLInputElement | HTMLTextAreaElement>;

  const [left, right, props] = useComplement(p, theme);

  return (
    <InputStyle
      {...theme}
      ref={ref as any}
      onClick={() => input.current.focus()}
      {...props}
    >
      <Complement {...theme._leftIcon} {...left} />
      {multiline
        ? <x.textarea ref={input as MutableRefObject<HTMLTextAreaElement>} placeholder={placeholder} {..._textarea} />
        : <x.input ref={input as MutableRefObject<HTMLInputElement>} placeholder={placeholder} {..._input} />}
      <Complement {...theme._rightIcon} {...right} />
    </InputStyle>
  );
});

const InputStyle = styled(x.div)`
  input, textarea {
    background: transparent;
    border: none;
    box-shadow: inherit;
    -webkit-appearance: inherit;
    transition: inherit;
    resize: none;
    width: 100%;

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
