import { x } from "@xstyled/emotion";
import Complement, { useComplement } from "components/Complement";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";
import { ButtonVariant, ButtonSize, ButtonThemeProps } from "./theme";
import { ElementType, useRef } from "react";
import { useButton } from "@react-aria/button";
import { Spinner } from "../Spinner/index";
import { useThemePropsMerge } from "../../hooks/useComponentTheme";

export * from "./theme";

export type ButtonProps = AnolisComponentProps<
"button",
ButtonThemeProps & {
  as?: ElementType | undefined;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";

  loading?: boolean;
},
ButtonVariant,
ButtonSize
>;

export const Button = anolisComponent<"button", ButtonProps>("button", (p, ref) => {
  const [left, right, { children, as, onClick, loading, _spinner, ...props }] = useComplement(useThemePropsMerge("button", p));

  const innerRef = useRef<HTMLButtonElement>(null);

  const { buttonProps } = useButton({
    ...props as any,
    isDisabled: props.disabled,
    elementType: as,
    onPress: onClick
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

Button.displayName = "Button";
