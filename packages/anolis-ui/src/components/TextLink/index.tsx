import { x } from "@xstyled/emotion";
import Complement, { useComplement } from "components/Complement";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { ElementType, ReactElement } from "react";
import { anolisComp } from "utils/anolisComponent";

import { TextLinkProps } from "./theme";

export * from "./theme";

type TextLinkComponent = <LC extends ElementType, RC extends ElementType>(props: TextLinkProps<LC, RC>) => ReactElement | null;

export const TextLink: TextLinkComponent = anolisComp("TextLink", (p, ref) => {
  const [left, right, { children, ...props }] = useComplement(useThemePropsMerge("textLink", p));

  return (
    <x.a ref={ref} {...props}>
      <Complement {...left} />
      {children}
      <Complement {...right} />
    </x.a>
  );
});
