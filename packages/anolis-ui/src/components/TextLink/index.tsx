import { x } from "@xstyled/emotion";
import Complement, { useComplement } from "components/Complement";
import { TextLinkVariant } from "components/TextLink/theme";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

import { TextLinkThemeProps } from "./theme";

export * from "./theme";

export type TextLinkProps = AnolisComponentProps<"a", TextLinkThemeProps, TextLinkVariant>;

export const TextLink = anolisComponent<"a", TextLinkProps>("a", (p, ref) => {
  const [left, right, { children, ...props }] = useComplement(useThemePropsMerge("textLink", p));

  return (
    <x.a ref={ref} {...props}>
      <Complement {...left} />
      {children}
      <Complement {...right} />
    </x.a>
  );
});

TextLink.displayName = "TextLink";
