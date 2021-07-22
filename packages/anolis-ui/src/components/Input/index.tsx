import styled, { SystemProps, x } from "@xstyled/emotion";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import { InputSize, InputVariant } from "components/Input/theme";
import Complement, { ComplementProps, useComplement } from "components/Complement";
import { MutableRefObject, useRef } from "react";

export * from "./theme";

export interface InputProps extends ComplementProps {
  placeholder?: string;
  multiline?: boolean;
  _textarea?: SystemProps;
  _input?: SystemProps;
}

export const Input = anolisComponent<"input", InputProps, InputVariant, InputSize>("input", (
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
      {...props}
      ref={ref as any}
      onClick={() => input.current.focus()}
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
