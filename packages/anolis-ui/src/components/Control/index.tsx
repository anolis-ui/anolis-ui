import { x } from "@xstyled/emotion";
import { Icon } from "components/Icon";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

import { ControlSizes, ControlThemeProps } from "./theme";

export * from "./theme";
export * from "./CloseControl";

export type ControlProps = AnolisComponentProps<"div", ControlThemeProps, never, ControlSizes>;

export const Control = anolisComponent<"div", ControlProps>("div", ({ s, _icon, icon, ...props }, ref) => {
  const theme = useComponentTheme("control", undefined, s);

  type A = Exclude<typeof _icon, undefined>;

  return (
    <x.div ref={ref} {...theme} {...props}>
      <Icon svg={icon} {...theme._icon as any} {..._icon as any} />
    </x.div>
  );
});
