import { SystemProps } from "@xstyled/emotion";

import { merge } from "./merge";

export interface ComponentTheme<P extends SizeVariantProps<keyof any, keyof any> = {}> {
  baseStyle: P;
  sizes: Record<NonNullable<P["s"]>, P>;
  variants: Record<NonNullable<P["v"]>, P>;
  defaultProps: {
    s?: P["s"];
    v?: P["v"];
  };
}

export type PartialComponentTheme<T extends ComponentTheme<any>> = Omit<Partial<T>, "sizes" | "variants"> & {
  sizes?: Partial<T["sizes"]>;
  variants?: Partial<T["variants"]>;
};

export type SizeVariantProps<V extends keyof any = never, S extends keyof any = never> = {
  s?: S;
  v?: V;
};

export const extendTheme = <T extends ComponentTheme<{}>>(base: T, target?: PartialComponentTheme<T>): T => {
  return !target
    ? base
    : {
      ...base,
      baseStyle: merge(base.baseStyle, target.baseStyle),
      variants: mergeVariants(base.variants, target.variants),
      sizes: mergeVariants(base.sizes, target.sizes),
      defaultProps: merge(base.defaultProps, target.defaultProps)
    };
};

const mergeVariants = <T extends Record<string, any>>(target: T, source: Partial<T> | undefined): T => Object.fromEntries(
  Object.entries(target).map(([k, v]) => [k, merge(v, source?.[k])])
) as T;

export type ElementProps<As extends React.ElementType> = As extends keyof JSX.IntrinsicElements
  ? Omit<JSX.IntrinsicElements[As], "color"> & SystemProps
  : React.ComponentProps<As>;

export const componentTheme = <P extends SizeVariantProps<keyof any, keyof any>>(
  baseStyle: P,
  variants?: Record<NonNullable<P["v"]>, P>,
  sizes?: Record<NonNullable<P["s"]>, P>,
  defaultProps?: {
    s?: P["s"];
    v?: P["v"];
  }
): ComponentTheme<P> => ({
  baseStyle,
  variants: variants ?? {} as Record<NonNullable<P["v"]>, P>,
  sizes: sizes ?? {} as Record<NonNullable<P["v"]>, P>,
  defaultProps: defaultProps ?? {}
});
