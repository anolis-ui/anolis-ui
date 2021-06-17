import styled, { x } from "@xstyled/emotion";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import { InputSize, InputVariant } from "components/Input/theme";
import Complement, { ComplementProps, useComplement } from "components/Complement";
import { useRef } from "react";

export * from "./theme";

export interface InputProps extends ComplementProps {
  placeholder?: string;
  multiline?: boolean;
}

export const Input = anolisComponent<"input", InputProps, InputVariant, InputSize>("input", (
  {
    children,
    v,
    s,
    placeholder,
    multiline,
    ...p
  }, ref) => {
  const theme = useComponentTheme("input", v, s);
  const input = useRef(null);

  const [left, right, props] = useComplement(p, theme);

  return (
    <InputStyle
      {...theme}
      {...props}
      ref={ref as any}
      // onClick={() => input.current && input.current.focus()}
    >
      <Complement {...theme._leftIcon} {...left} />
      {multiline
        ? <x.textarea ref={input as any} placeholder={placeholder} />
        : <x.input ref={input as any} placeholder={placeholder} />}
      <Complement {...theme._rightIcon} {...right} />
    </InputStyle>
  );
});

const InputStyle = styled.divBox`
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
