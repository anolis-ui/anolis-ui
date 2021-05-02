import { x } from "@xstyled/emotion";
import Complement, { comp, ComplementProps } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import { TextLinkVariant } from "components/TextLink/theme";

export * from "./theme";

export type TextLinkProps = ComplementProps;

export const TextLink = anolisComponent<"a", TextLinkProps, TextLinkVariant>("a", (
  { children, v, ...p }, ref) => {
  const theme = useComponentTheme("textLink", v);

  const [left, right, props] = comp(p);

  return (
    <x.a ref={ref as any} {...theme as TextLinkProps} {...props}>
      <Complement _icon={theme._leftIcon} {...left} />
      {children}
      <Complement _icon={theme._rightIcon} {...right} />
    </x.a>
  );
});
