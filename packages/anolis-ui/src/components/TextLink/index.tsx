import { x } from "@xstyled/emotion";
import Complement, { useComplement } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";
import { TextLinkVariant } from "components/TextLink/theme";
import { TextLinkThemeProps } from "./theme";

export * from "./theme";

export type TextLinkProps = AnolisComponentProps<"a", TextLinkThemeProps, TextLinkVariant>;

export const TextLink = anolisComponent<"a", TextLinkProps>("a", (
  { children, v, ...p }, ref) => {
  const theme = useComponentTheme("textLink", v);

  const [left, right, props] = useComplement(p, theme);

  return (
    <x.a ref={ref as any} {...theme as TextLinkProps} {...props}>
      <Complement _icon={theme._leftIcon} {...left} />
      {children}
      <Complement _icon={theme._rightIcon} {...right} />
    </x.a>
  );
});

TextLink.displayName = "TextLink";
