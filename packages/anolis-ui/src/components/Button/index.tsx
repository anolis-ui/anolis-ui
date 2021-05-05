import { x } from "@xstyled/emotion";
import Complement, { useComplement, ComplementProps } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import { ButtonVariant, ButtonSize } from "./theme";
import { ElementType } from "react";

export * from "./theme";

export type ButtonProps = ComplementProps & {
  as?: ElementType | undefined;
  href?: string; target?: "_blank" | "_self" | "_parent" | "_top";
};

export const Button = anolisComponent<"button", ButtonProps, ButtonVariant, ButtonSize>("button", (
  { children, v, s, ...p }, ref) => {
  const theme = useComponentTheme("button", v, s);

  const [left, right, props] = useComplement(p, theme);

  return (
    <x.button ref={ref as any} {...theme as ButtonProps} {...props}>
      <Complement {...left} />
      {children}
      <Complement {...right} />
    </x.button>
  );
});
