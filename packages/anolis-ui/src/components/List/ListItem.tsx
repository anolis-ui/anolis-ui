import { x } from "@xstyled/emotion";
import Complement, { useSideComplement } from "components/Complement";
import { usePropsMerge } from "hooks/useComponentTheme";
import { ListItemProps, useTheme } from "index";
import { ElementType, ReactElement, useMemo } from "react";
import { anolisComp } from "utils/anolisComponent";
import { componentTheme } from "utils/theme";

export type ListItemComponent = <Icon extends ElementType>(props: ListItemProps<Icon>) => ReactElement | null;

export const ListItem: ListItemComponent = anolisComp("ListItem", ({ children, ...p }, ref) => {
  const { list: t } = useTheme();

  const itemTheme = useMemo(() => componentTheme<ListItemProps<ElementType>>(t.baseStyle._item ?? {}, {
    ordered: t.variants.ordered._item ?? {},
    unordered: t.variants.unordered._item ?? {}
  }), [t.baseStyle._item, t.variants.ordered._item, t.variants.unordered._item]);

  const [left, props] = useSideComplement(usePropsMerge(itemTheme, p));

  return (
    <x.li ref={ref} {...props}>
      <Complement {...left} />
      {children}
    </x.li>
  );
});

// const content = style({
//   prop: "content"
// });

// export const { css, styled, x, createGlobalStyle } = createCss(
//   compose(system, content)
// );
