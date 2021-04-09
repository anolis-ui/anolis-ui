import { x } from "@xstyled/emotion";
import Complement, { comp, ComplementProps } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import { ButtonVariant, ButtonSize } from "./theme";

export * from "./theme";

export type ButtonProps = ComplementProps & { href?: string; target?: "_blank" | "_self" | "_parent" | "_top" };

export const Button = anolisComponent<"button", ButtonProps, ButtonVariant, ButtonSize>("button", (
  { children, v, s, ...p }, ref) => {
  const theme = useComponentTheme("button", v, s);

  const [left, right, props] = comp(p);

  return (
    <x.button ref={ref as any} {...theme as ButtonProps} {...props}>
      <Complement {...theme._leftIcon} {...left} />
      {children}
      <Complement {...theme._rightIcon} {...right} />
    </x.button>
  );
});
