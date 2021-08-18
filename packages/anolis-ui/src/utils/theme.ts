import { merge } from "./merge";
import { SystemProps } from "@xstyled/emotion";
import { DOMAttributes, HTMLAttributes } from "react";

export interface ComponentTheme<
  Props extends object = {},
  Variant extends keyof any = never,
  Size extends keyof any = never
> {
  baseStyle: ThemeComponentProps<Props>;
  sizes: Record<Size, ThemeComponentProps<Props>>;
  variants: Record<Variant, ThemeComponentProps<Props>>;
  defaultProps: {
    s?: Size;
    v?: Variant;
  };
}

type ThemeComponentProps<P extends object> = SystemProps & P & Omit<HTMLAttributes<{}>, keyof DOMAttributes<{}>>;

export type PartialComponentTheme<T extends ComponentTheme<any, any, any>> = Omit<Partial<T>, "sizes" | "variants"> & {
  sizes?: Partial<T["sizes"]>;
  variants?: Partial<T["variants"]>;
};

export type SizeVariantProps<V extends keyof any = never, S extends keyof any = never> = {
  s?: S;
  v?: V;
};

export const extendTheme = <T extends ComponentTheme<{}, keyof any, keyof any>>(base: T, target?: PartialComponentTheme<T>): T => {
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
