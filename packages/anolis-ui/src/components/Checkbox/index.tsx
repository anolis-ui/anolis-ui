import { useFocusRing } from "@react-aria/focus";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { x } from "@xstyled/emotion";
import { Icon } from "components/Icon";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { FC, useState } from "react";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";
import { renderable } from "utils/renderable";

import { useExtractInputProps } from "../Input";
import { CheckboxSize, CheckboxThemeProps, CheckboxVariant } from "./theme";

export * from "./theme";

export type CheckboxProps = AnolisComponentProps<"label", CheckboxThemeProps, CheckboxVariant, CheckboxSize>;

export const Checkbox = anolisComponent<"label", CheckboxProps>("label", (props, ref) => {
  const {
    control,
    _control,
    _controlFocusRing,
    _controlActive,
    icon,
    _icon,
    label,
    _label,
    children,
    ...p
  } = useThemePropsMerge("checkbox", props);
  const [checked, setChecked] = useState(p.checked ?? p.defaultChecked);
  const { isFocusVisible, focusProps } = useFocusRing();

  const [transferedProps, finalProps] = useExtractInputProps(p);

  return (
    <x.label ref={ref} {...finalProps} data-a-group>
      <VisuallyHidden>
        <x.input
          type="checkbox"
          {...focusProps}
          {...transferedProps}
          onChange={(e) => {
            !props.readOnly && setChecked(e.target.checked);
            transferedProps.onChange?.(e);
          }}
        />
      </VisuallyHidden>

      <x.div
        {..._control}
        {...isFocusVisible && _controlFocusRing}
        {...checked && _controlActive}
      >
        {checked && (renderable(control) || (
          <Icon
            {..._icon}
            svg={icon ?? DefaultCheckboxIcon}
          />
        ))}
      </x.div>

      <x.span {..._label}>
        {renderable(label)}
        {children}
      </x.span>
    </x.label>
  );
});

Checkbox.displayName = "Checkbox";

const DefaultCheckboxIcon: FC = () => (
  <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8" width="10" height="8">
    <g>
      <path
        fill="#fff"
        d="M8.29 0.29C8.68 -0.1 9.32 -0.1 9.71 0.29C10.07 0.65 10.1 1.22 9.79 1.61L9.71 1.71L3.71 7.71C3.35 8.07 2.78 8.1 2.39 7.79L2.29 7.71L0.29 5.71C-0.1 5.32 -0.1 4.68 0.29 4.29C0.65 3.93 1.22 3.9 1.61 4.21L1.71 4.29L3 5.59L8.29 0.29Z"
      />
    </g>
  </svg>
);
