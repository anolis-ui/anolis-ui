import { useMemo } from "react";
import { AnolisComponentProps } from "utils/anolisComponent";
import { merge } from "utils/merge";

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
  P extends AnolisComponentProps<any, {}, string & keyof AnolisTheme[K]["variants"], string & keyof AnolisTheme[K]["sizes"]>
>(key: K, props: P): Omit<P, "v" | "s"> => {
  const theme = useTheme()[key];

  return useMemo(() => {
    const { v, s, ...p } = props;

    return merge(
      theme.baseStyle,
      v ?? theme.defaultProps.v ? (theme.variants as any)[v ?? theme.defaultProps.v] : undefined,
      s ?? theme.defaultProps.s ? (theme.sizes as any)[s ?? theme.defaultProps.s] : undefined,
      p
    );
  }, [props, theme.baseStyle, theme.defaultProps.s, theme.defaultProps.v, theme.sizes, theme.variants]);
};
