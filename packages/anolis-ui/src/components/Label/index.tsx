import { x } from "@xstyled/emotion";
import Complement, { useComplement } from "components/Complement";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

import { LabelThemeProps } from "./theme";

export * from "./theme";

export type LabelProps = AnolisComponentProps<"label", LabelThemeProps>;

export const Label = anolisComponent<"label", LabelProps>("label", (p, ref) => {
  const [left, right, { children, ...props }] = useComplement(useThemePropsMerge("label", p));

  return (
    <x.label ref={ref as any} {...props}>
      <Complement {...left} />
      {children}
      <Complement {...right} />
    </x.label>
  );
});

Label.displayName = "Label";
