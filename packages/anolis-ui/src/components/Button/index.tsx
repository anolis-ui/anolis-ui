import { x } from "@xstyled/emotion";
import Complement, { useComplement, ComplementProps } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";
import { ButtonVariant, ButtonSize, ButtonThemeProps } from "./theme";
import { ElementType, useRef } from "react";
import { useButton } from "@react-aria/button";

export * from "./theme";

export type ButtonProps = AnolisComponentProps<
"button",
ButtonThemeProps & {
  as?: ElementType | undefined;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
},
ButtonVariant,
ButtonSize
>;

export const Button = anolisComponent<"button", ButtonProps>("button", (
  { children, v, s, as, onClick, ...p }, ref) => {
  if (ref && !("current" in ref)) throw new Error("Unsupported ref");

  const t = useComponentTheme("button", v, s);

  const [left, right, props, theme] = useComplement(p, t);

  const innerRef = useRef<HTMLButtonElement>(null);

  const { buttonProps } = useButton({
    ...props as any,
    isDisabled: props.disabled,
    elementType: as
  }, ref ?? innerRef);

  return (
    <x.button
      ref={ref ?? innerRef}
      {...theme}
      as={as}
      {...buttonProps}
      value={as === "input" ? p.value : undefined}
      onClick={onClick}
    >
      {as !== "input" ? (
        <>
          <Complement {...left} />
          {children}
          <Complement {...right} />
        </>
      ) : undefined}
    </x.button>
  );
});
