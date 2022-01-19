import { ComponentType, useMemo, ElementType, ComponentProps } from "react";
import { merge } from "utils/merge";
import { Renderable } from "utils/renderComponent";
import { ComponentTheme, SizeVariantProps } from "utils/theme";

import { AnolisTheme } from "../theme";
import useTheme from "./useTheme";

export const useComponentTheme = <
  K extends keyof AnolisTheme,
  V extends keyof AnolisTheme[K]["variants"],
  S extends keyof AnolisTheme[K]["sizes"]
>(key: K, v?: V, s?: S): AnolisTheme[K]["baseStyle"] => {
  const root = useTheme();

  const theme = root[key];

  return useMemo(() => merge(
    theme.baseStyle,
    v ?? theme.defaultProps.v ? (theme.variants as any)[v ?? theme.defaultProps.v] : undefined,
    s ?? theme.defaultProps.s ? (theme.sizes as any)[s ?? theme.defaultProps.s] : undefined
  ), [s, theme.baseStyle, theme.defaultProps.s, theme.defaultProps.v, theme.sizes, theme.variants, v]);
};

export const useThemePropsMerge = <
  K extends keyof AnolisTheme,
  P extends SizeVariantProps<string & keyof AnolisTheme[K]["variants"], string & keyof AnolisTheme[K]["sizes"]>
>(key: K, props: P): Omit<P, "v" | "s"> => {
  const theme = useTheme()[key];

  return usePropsMerge(theme as any, props);
};

export const usePropsMerge = <Props extends object, V extends string, S extends string>(
  theme: ComponentTheme<Props & SizeVariantProps<V, S>>,
  props: Props & SizeVariantProps<V, S>
): Props => {
  return useMemo(() => {
    const { v, s, ...p } = props;

    return merge(
      theme.baseStyle,
      v ?? theme.defaultProps.v ? theme.variants[(v as never) ?? theme.defaultProps.v!] : undefined,
      s ?? theme.defaultProps.s ? theme.sizes[(s as never) ?? theme.defaultProps.s!] : undefined,
      p as Props
    );
  }, [props, theme.baseStyle, theme.defaultProps.s, theme.defaultProps.v, theme.sizes, theme.variants]);
};

export const useTripletProp = <T extends string, E extends ElementType>(s: T, v: any) => {
  const { [`_${s}` as never]: _, [`$${s}` as never]: $, [s]: children, ...rest } = v;

  return [{ _: _ as ComponentProps<E>, $: $ as E, children }, rest as Omit<TripletProp<T, E>, `_${T}` | `$${T}`>] as const;
};

export type TripletProp<T extends string, E extends ElementType> =
  & { [K in `_${T}`]?: ComponentProps<E>; }
  & { [K in T]?: Renderable; }
  & { [K in `$${T}`]?: E; };
