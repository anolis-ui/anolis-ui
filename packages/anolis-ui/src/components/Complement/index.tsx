import { Icon, IconProps } from "components/Icon";
import React, { FC, useMemo } from "react";
import renderComponent, { Renderable } from "utils/renderComponent";

export type SideComplementThemeProps = {
  _icon?: IconProps;
};

export interface SideComplementProps extends SideComplementThemeProps {
  icon?: Renderable;
  element?: Renderable;
}

export type ComplementThemeProps = {
  _leftIcon?: IconProps;
  _rightIcon?: IconProps;
};

export interface ComplementProps extends ComplementThemeProps {
  leftIcon?: Renderable;
  leftElement?: Renderable;
  rightIcon?: Renderable;
  rightElement?: Renderable;
}

export const useSideComplement = <T extends SideComplementProps>(
  { _icon, icon, element, ...props }: T,
  theme: SideComplementThemeProps
): [ComplementSideProps, Omit<T, keyof SideComplementProps>] =>
  useMemo(() => [{ _icon: { ...theme._icon, ..._icon }, icon, element }, props], [_icon, element, icon, props, theme._icon]);

export const useComplement = <T extends ComplementProps>(
  {
    _rightIcon,
    rightIcon,
    rightElement,
    _leftIcon,
    leftIcon,
    leftElement,
    ...props
  }: T,
  theme: ComplementThemeProps
): [ComplementSideProps, ComplementSideProps, Omit<T, keyof ComplementProps>] =>
  useMemo(() => [
    {
      _icon: { ...theme._leftIcon, ..._leftIcon },
      icon: leftIcon,
      element: leftElement
    },
    {
      _icon: { ...theme._rightIcon, ..._rightIcon },
      icon: rightIcon,
      element: rightElement
    },
    props
  ], [_leftIcon, _rightIcon, leftElement, leftIcon, props, rightElement, rightIcon, theme._leftIcon, theme._rightIcon]);

interface ComplementSideProps {
  _icon?: IconProps;
  icon?: Renderable;
  element?: Renderable;
}

const Complement: FC<ComplementSideProps> = ({ _icon, icon, element }) => (
  <>
    {renderComponent(element)}
    {icon && <Icon svg={icon} {..._icon as any} />}
  </>
);

export default Complement;
