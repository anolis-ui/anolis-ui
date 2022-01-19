import { useButton } from "@react-aria/button";
import { x } from "@xstyled/emotion";
import Complement, { useComplement } from "components/Complement";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { ElementType, ReactElement, useRef } from "react";
import { anolisComp } from "utils/anolisComponent";

import { Spinner } from "../Spinner";
import { ButtonProps } from "./theme";

export * from "./theme";

export type ButtonComponent = <
  LC extends ElementType,
  RC extends ElementType,
  TSpinner extends ElementType
>(p: ButtonProps<LC, RC, TSpinner>) => ReactElement | null;

export const Button: ButtonComponent = anolisComp("Button", (p, ref) => {
  const [left, right, { children, as, loading, _spinner, ...props }] = useComplement(useThemePropsMerge("button", p));

  const innerRef = useRef<HTMLButtonElement>(null);

  const { buttonProps } = useButton({
    ...props as any,
    isDisabled: props.disabled,
    elementType: as
  }, ref && "current" in ref ? ref : innerRef);

  return (
    <x.button
      as={as}
      {...props}
      {...buttonProps}
      ref={ref ?? innerRef}
      value={as === "input" ? props.value : undefined}
    >
      {as !== "input"
        ? loading
          ? <Spinner {..._spinner} />
          : (
            <>
              <Complement {...left} />
              {children}
              <Complement {...right} />
            </>
          )
        : undefined}
    </x.button>
  );
});
