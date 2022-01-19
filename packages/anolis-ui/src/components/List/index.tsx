import { x } from "@xstyled/emotion";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { ElementType, ReactElement } from "react";
import { anolisComp } from "utils/anolisComponent";
import { renderTriplet } from "utils/renderTriplet";

import { ListProps } from "./theme";

export * from "./theme";

export type ListComponent = <Item extends ElementType>(props: ListProps<Item>) => ReactElement | null;

export const List: ListComponent = anolisComp("List", (p, ref) => {
  const { $item, _item, item, children, ...props } = useThemePropsMerge("list", p);

  return (
    <x.ul ref={ref} {...props}>
      {item?.map(i =>
        renderTriplet($item, _item, i)
      )}
      {children}
    </x.ul>
  );
});
