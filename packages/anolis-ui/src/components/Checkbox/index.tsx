import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import styled, { SystemProps, x } from "@xstyled/emotion";
import { CheckboxSize, CheckboxVariant } from "components/Checkbox/theme";
import { PseudoProp } from "utils/PseudoProp";
import { ReactNode, useState } from "react";
import { Icon } from "components/Icon";
import { Renderable } from "utils/renderComponent";

export * from "./theme";

export interface CheckboxProps extends PseudoProp {
  customCheckbox?: ReactNode;
  customCheckboxIcon?: Renderable;
  controlProps?: SystemProps;
  controlActiveProps?: SystemProps;
}

const defaultCheckboxIcon = (
  <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8" width="10" height="8">
    <g>
      <path fill="#fff" d="M8.29 0.29C8.68 -0.1 9.32 -0.1 9.71 0.29C10.07 0.65 10.1 1.22 9.79 1.61L9.71 1.71L3.71 7.71C3.35 8.07 2.78 8.1 2.39 7.79L2.29 7.71L0.29 5.71C-0.1 5.32 -0.1 4.68 0.29 4.29C0.65 3.93 1.22 3.9 1.61 4.21L1.71 4.29L3 5.59L8.29 0.29Z" />
    </g>
  </svg>
);

export const Checkbox = anolisComponent<"div", CheckboxProps, CheckboxVariant, CheckboxSize>("div", (
  {
    children,
    v,
    s,
    customCheckbox,
    customCheckboxIcon,
    controlProps,
    controlActiveProps,
    ...p
  }, ref) => {
  const theme = useComponentTheme("checkbox", v, s);
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxStyle
      as="label"
      display="flex"
      alignItems="center"
      role="group"
      ref={ref as any}
      {...theme}
      {...p}
    >
      <x.input
        type="checkbox"
        onChange={(e) => setChecked(e.target.checked)}
      />

      <x.div
        flex="0 0 auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        userSelect="none"
        {...theme.control}
        {...checked && theme.controlActive}
        {...controlProps}
        {...checked && controlActiveProps}
      >
        {checked && (
          customCheckbox ||
            <Icon display="flex" alignItems="center" justifyContent="center" svg={customCheckboxIcon || defaultCheckboxIcon} />
        )}
      </x.div>

      {children}
    </CheckboxStyle>
  );
});

const CheckboxStyle = styled(x.div)`
  input {
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
