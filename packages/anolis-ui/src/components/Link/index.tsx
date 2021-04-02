import { x } from "@xstyled/emotion";
import Complement, { comp, ComplementProps } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import { LinkVariant } from "components/Link/theme";

export * from "./theme";

export type LinkProps = ComplementProps;

export const Link = anolisComponent<"a", LinkProps, LinkVariant>("a", (
  { children, v, ...p }, ref) => {
  const theme = useComponentTheme("link", v);

  const [left, right, props] = comp(p);

  return (
    <x.a ref={ref as any} {...theme as LinkProps} {...props}>
      <Complement {...theme._leftIcon} {...left} />
      {children}
      <Complement {...theme._rightIcon} {...right} />
    </x.a>
  );
});
