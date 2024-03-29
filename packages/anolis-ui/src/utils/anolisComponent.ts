import { SystemProps, x } from "@xstyled/emotion";
import { StyledComponent } from "@emotion/styled";
import hoistNonReactStatics from "hoist-non-react-statics";
import { forwardRef, ForwardRefRenderFunction, RefObject } from "react";
import { SizeVariantProps } from "./theme";

export type AnolisComponent<
  Element extends keyof JSX.IntrinsicElements,
  Props extends object,
  Variant extends string = never,
  Size extends string = never
> =
  StyledComponent<
  SystemProps & SizeVariantProps<Variant, Size> & { as?: React.ElementType } & Props,
  {},
  Omit<JSX.IntrinsicElements[Element], "color">
  >;

export type AnolisComponentProps<
  Element extends keyof JSX.IntrinsicElements,
  Props extends object,
  Variant extends string = never,
  Size extends string = never
> =
  & SystemProps
  & SizeVariantProps<Variant, Size>
  & { as?: React.ElementType }
  & Props
  & Omit<JSX.IntrinsicElements[Element], "color" | "v" | "s">;

export const anolisComponent = <
  Element extends keyof JSX.IntrinsicElements,
  Props extends AnolisComponentProps<Element, object, string, string>
>(
  tag: Element,
  Component: ForwardRefRenderFunction<RefOf<Element>, Props>
): AnolisComponent<Element, Props, NonNullable<Props["v"]>, NonNullable<Props["s"]>> => {
  const a = forwardRef(hoistNonReactStatics(Component, x[tag]));

  return a as any;
};

// Way to get from element key strings ("div", "span", "a") their HTML type (HTMLDivElement, HTMLSpanElement, HTMLAnchorElement)
type RefOf<K extends keyof JSX.IntrinsicElements> =
  Exclude<Parameters<Exclude<(JSX.IntrinsicElements[K]["ref"]), undefined | string | null | RefObject<{}>>>[0], null>;
