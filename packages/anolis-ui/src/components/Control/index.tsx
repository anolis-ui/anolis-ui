import { x } from "@xstyled/emotion";
import { Icon } from "components/Icon";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

import { ControlSizes, ControlThemeProps } from "./theme";

export * from "./theme";
export * from "./CloseControl";

export type ControlProps = AnolisComponentProps<"div", ControlThemeProps, never, ControlSizes>;

export const Control = anolisComponent<"div", ControlProps>("div", (p, ref) => {
  const { _icon, icon, ...props } = useThemePropsMerge("control", p);

  return (
    <x.div ref={ref} {...props}>
      <Icon svg={icon} {..._icon as any} />
    </x.div>
  );
});

Control.displayName = "Control";
