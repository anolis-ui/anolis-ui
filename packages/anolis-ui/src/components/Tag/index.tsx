import { x } from "@xstyled/emotion";
import Complement, { useComplement } from "components/Complement";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

import { TagThemeProps, TagVariant } from "./theme";

export * from "./theme";

export type TagProps = AnolisComponentProps<"div", TagThemeProps, TagVariant>;

export const Tag = anolisComponent<"div", TagProps>("div", (p, ref) => {
  const [left, right, { children, ...props }] = useComplement(useThemePropsMerge("tag", p));

  return (
    <x.div ref={ref} {...props}>
      <Complement {...left} />
      {children}
      <Complement {...right} />
    </x.div>
  );
});

Tag.displayName = "Tag";
