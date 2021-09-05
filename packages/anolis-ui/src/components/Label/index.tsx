import { x } from "@xstyled/emotion";
import Complement, { useComplement } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

import { LabelThemeProps } from "./theme";

export * from "./theme";

export type LabelProps = AnolisComponentProps<"label", LabelThemeProps>;

export const Label = anolisComponent<"label", LabelProps>("label", (
  { children, ...p }, ref) => {
  const theme = useComponentTheme("label");

  const [left, right, props] = useComplement(p, theme);

  return (
    <x.label ref={ref as any} {...theme} {...props}>
      <Complement _icon={theme._leftIcon} {...left} />
      {children}
      <Complement _icon={theme._rightIcon} {...right} />
    </x.label>
  );
});

Label.displayName = "Label";
