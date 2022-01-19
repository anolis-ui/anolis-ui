import { x } from "@xstyled/emotion";
import Complement, { useComplement } from "components/Complement";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { ElementType, ReactElement } from "react";
import { anolisComp } from "utils/anolisComponent";

import { LabelProps } from "./theme";

export * from "./theme";

export type LabelComponent = <LC extends ElementType, RC extends ElementType> (props: LabelProps<LC, RC>) => ReactElement | null;

export const Label: LabelComponent = anolisComp("Label", (p, ref) => {
  const [left, right, { children, ...props }] = useComplement(useThemePropsMerge("label", p));

  return (
    <x.label ref={ref as any} {...props}>
      <Complement {...left} />
      {children}
      <Complement {...right} />
    </x.label>
  );
});
