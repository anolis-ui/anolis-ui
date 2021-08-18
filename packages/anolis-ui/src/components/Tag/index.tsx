import { x } from "@xstyled/emotion";
import Complement, { useComplement, ComplementProps } from "components/Complement";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";

import { TagVariant, TagThemeProps } from "./theme";

export * from "./theme";

export type TagProps = TagThemeProps;

export const Tag = anolisComponent<"div", TagProps, TagVariant>("div", ({ children, v, ...p }, ref) => {
  const theme = useComponentTheme("tag", v);

  const [left, right, props] = useComplement(p, theme);

  return (
    <x.div ref={ref as any} {...theme} {...props}>
      <Complement {...theme._leftIcon} {...left} />
      {children}
      <Complement {...theme._rightIcon} {...right} />
    </x.div>
  );
});
