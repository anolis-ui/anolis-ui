import { x } from "@xstyled/emotion";
import Complement, { useComplement, ComplementProps } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";

export * from "./theme";

export type LabelProps = ComplementProps;

export const Label = anolisComponent<"label", LabelProps>("label", (
  { children, ...p }, ref) => {
  const theme = useComponentTheme("label");

  const [left, right, props] = useComplement(p, theme);

  return (
    <x.div ref={ref as any} {...theme} {...props}>
      <Complement _icon={theme._leftIcon} {...left} />
      {children}
      <Complement _icon={theme._rightIcon} {...right} />
    </x.div>
  );
});
