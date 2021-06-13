import styled, { breakpoints, css } from "@xstyled/emotion";
import { useComponentTheme } from "hooks/useComponentTheme";
import { useMemo } from "react";
import { anolisComponent } from "utils/anolisComponent";
import { PseudoProp } from "utils/PseudoProp";

import { TypographyThemeProps, TypographyVariant } from "./theme";
import { separateObjValues, groupByBreakpoint, wrapObjsWithSelector } from "./utils";

export * from "./theme";

interface TypographyProps extends TypographyThemeProps { }

export const Typography = anolisComponent<"div", TypographyProps, TypographyVariant>("div", ({
  v,
  s,
  ...props
}, ref) => {
  const theme = useComponentTheme("typography", v);

  return (
    <TypographyStyle className="typo" ref={ref} _theme={theme} {...props} />
  );
});

interface TypographyStyleProps extends Partial<Record<Keys, PseudoProp>> {
  _theme: TypographyThemeProps;
}

type Keys = Exclude<keyof TypographyThemeProps, keyof PseudoProp>;

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

const TypographyStyle = styled.divBox<TypographyStyleProps>`
  ${typoCss("_h1", "h1, ._anolis-as-h1")}
  ${typoCss("_h2", "h2, ._anolis-as-h2")}
  ${typoCss("_h3", "h3, ._anolis-as-h3")}
  ${typoCss("_h4", "h4, ._anolis-as-h4")}
  ${typoCss("_h5", "h5, ._anolis-as-h5")}
  ${typoCss("_h6", "h6, ._anolis-as-h6")}


  ${typoCss("_p", "p, ._anolis-as-h1")}
  ${typoCss("_lead", "._anolis-as-lead")}
`;
