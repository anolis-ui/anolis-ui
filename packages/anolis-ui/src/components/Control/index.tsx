import { x } from "@xstyled/emotion";
import { Icon } from "components/Icon";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { ElementType, ReactElement } from "react";
import { anolisComp } from "utils/anolisComponent";

import { ControlProps } from "./theme";

export * from "./theme";
export * from "./CloseControl";

export type ControlComponent = <Icon extends ElementType>(props: ControlProps<Icon>) => ReactElement | null;

export const Control: ControlComponent = anolisComp("Control", (p, ref) => {
  const { _icon, icon, ...props } = useThemePropsMerge("control", p);

  return (
    <x.div ref={ref} {...props}>
      <Icon svg={icon} {..._icon as any} />
    </x.div>
  );
});
