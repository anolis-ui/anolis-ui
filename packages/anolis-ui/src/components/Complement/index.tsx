import { Icon } from "components/Icon";
import { ElementType, FC, useMemo } from "react";
import renderComponent, { Renderable } from "utils/renderComponent";
import { ElementProps } from "utils/theme";

export type SideComplementProps<E extends ElementType> = {
  $icon?: E;
  _icon?: ElementProps<E>;
  icon?: Renderable;
  element?: Renderable;
};

export type ComplementProps<L extends ElementType, R extends ElementType> = {
  $leftIcon?: L;
  _leftIcon?: ElementProps<L>;
  leftIcon?: Renderable;
  leftElement?: Renderable;

  $rightIcon?: L;
  _rightIcon?: ElementProps<L>;
  rightIcon?: Renderable;
  rightElement?: Renderable;
};

export const useSideComplement = <E extends ElementType, T extends SideComplementProps<E>>(
  { _icon, icon, $icon, element, ...props }: T,
  theme: SideComplementProps<E> = {}
): [SideComplementProps<E>, Omit<T, keyof SideComplementProps<E>>] =>
  useMemo(() => [
    { _icon: { ...theme._icon!, ..._icon! }, icon, element },
    props
  ], [_icon, element, icon, props, theme._icon]);

export const useComplement = <
  L extends ElementType,
  R extends ElementType,
  T extends ComplementProps<L, R>,
  U extends ComplementProps<L, R>
>(
  {
    _rightIcon,
    $rightIcon,
    rightIcon,
    rightElement,
    _leftIcon,
    $leftIcon,
    leftIcon,
    leftElement,
    ...props
  }: T,
  {
    _leftIcon: themeLeftIcon,
    _rightIcon: themeRightIcon,
    ...theme
  }: U = {} as any
): [SideComplementProps<L>, SideComplementProps<R>, Omit<T, keyof ComplementProps<L, R>>, Omit<U, "_leftIcon" | "_rightIcon">] =>
  useMemo(() => [
    {
      _icon: { ...themeLeftIcon!, ..._leftIcon! },
      icon: leftIcon,
      element: leftElement
    },
    {
      _icon: { ...themeRightIcon!, ..._rightIcon! },
      icon: rightIcon,
      element: rightElement
    },
    props,
    theme
  ], [_leftIcon, _rightIcon, leftElement, leftIcon, props, rightElement, rightIcon, theme, themeLeftIcon, themeRightIcon]);

const Complement: FC<SideComplementProps<ElementType>> = ({ _icon, icon, $icon, element }) => (
  <>
    {renderComponent(element)}
    {icon && <Icon svg={icon} {..._icon as any} />}
  </>
);

export default Complement;
