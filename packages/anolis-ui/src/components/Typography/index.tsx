import styled, { breakpoints, createGlobalStyle, SystemProps, x } from "@xstyled/emotion";
import { useComponentTheme } from "hooks/useComponentTheme";
import { ReactElement } from "react";
import { anolisComp } from "utils/anolisComponent";

import { TypographyProps } from "./theme";
import { groupByBreakpoint, separateObjValues, wrapObjsWithSelector } from "./utils";

export * from "./theme";

export type TypographyComponent = (props: TypographyProps & { topLevel?: boolean }) => ReactElement | null;

export const Typography: TypographyComponent = anolisComp("div", ({ v, s, topLevel, ...props }, ref) => {
  const theme = useComponentTheme("typography", v);

  return topLevel ? (
    <>
      <TypographyGlobalStyle className="typo" {...{ _theme: theme } as any} {...props} />
      {props.children}
    </>
  )
    : <TypographyStyle className="typo" ref={ref} _theme={theme} {...props} />
  ;
});

type Keys = keyof TypographyProps & `_${string}`;

type TypographyStyleProps =
  & { [K in Keys]?: SystemProps }
  & { _theme: TypographyProps };

const typoCss = (t: Keys, selector: string) =>
  (p: TypographyStyleProps) => {
    const themeValues = separateObjValues(p._theme[t]);
    const propValues = separateObjValues(p[t]);

    return wrapObjsWithSelector(selector, [
      Object.fromEntries(themeValues?.[1]),
      breakpoints(groupByBreakpoint(themeValues?.[0]))(p),
      propValues && Object.fromEntries(propValues[1]),
      propValues && breakpoints(groupByBreakpoint(propValues[0]))(p)
    ].flat());
  };

const TypographyStyle = styled(x.div)<TypographyStyleProps>`
  ${typoCss("_h1", "h1, ._anolis-as-h1")}
  ${typoCss("_h2", "h2, ._anolis-as-h2")}
  ${typoCss("_h3", "h3, ._anolis-as-h3")}
  ${typoCss("_h4", "h4, ._anolis-as-h4")}
  ${typoCss("_h5", "h5, ._anolis-as-h5")}
  ${typoCss("_h6", "h6, ._anolis-as-h6")}


  ${typoCss("_p", "p, ._anolis-as-p")}
  ${typoCss("_lead", "._anolis-as-lead")}
`;

const TypographyGlobalStyle = createGlobalStyle`
  ${typoCss("_h1", "h1, ._anolis-as-h1") as any}
  ${typoCss("_h2", "h2, ._anolis-as-h2") as any}
  ${typoCss("_h3", "h3, ._anolis-as-h3") as any}
  ${typoCss("_h4", "h4, ._anolis-as-h4") as any}
  ${typoCss("_h5", "h5, ._anolis-as-h5") as any}
  ${typoCss("_h6", "h6, ._anolis-as-h6") as any}


  ${typoCss("_p", "p, ._anolis-as-p") as any}
  ${typoCss("_lead", "._anolis-as-lead") as any}
`;
