import { Icon, IconProps } from "components/Icon";
import { FC, useMemo, ComponentProps } from "react";
import renderComponent, { Renderable } from "utils/renderComponent";
import { TripletProp } from "utils/TripletProps";

export type SideComplementProps =
  & TripletProp<"icon", IconProps>
  & { element?: Renderable };

export type ComplementProps =
  & TripletProp<"leftIcon", IconProps>
  & TripletProp<"rightIcon", IconProps>
  & {
    leftElement?: Renderable;
    rightElement?: Renderable;
  };

export const useSideComplement = <T extends SideComplementProps>(
  { _icon, icon, $icon, element, ...props }: T,
  theme: SideComplementProps
): [SideComplementProps, Omit<T, keyof SideComplementProps>] =>
  useMemo(() => [{ _icon: { ...theme._icon, ..._icon }, icon, element }, props], [_icon, element, icon, props, theme._icon]);

export const useComplement = <T extends ComplementProps, U extends ComplementProps>(
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
  }: U
): [SideComplementProps, SideComplementProps, Omit<T, keyof ComplementProps>, Omit<U, "_leftIcon" | "_rightIcon">] =>
  useMemo(() => [
    {
      _icon: { ...themeLeftIcon, ..._leftIcon },
      icon: leftIcon,
      element: leftElement
    },
    {
      _icon: { ...themeRightIcon, ..._rightIcon },
      icon: rightIcon,
      element: rightElement
    },
    props,
    theme
  ], [_leftIcon, _rightIcon, leftElement, leftIcon, props, rightElement, rightIcon, theme, themeLeftIcon, themeRightIcon]);

const Complement: FC<SideComplementProps> = ({ _icon, icon, $icon, element }) => (
  <>
    {renderComponent(element)}
    {icon && <Icon svg={icon} {..._icon as any} />}
  </>
);

export default Complement;
