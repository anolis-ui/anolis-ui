import styled, { css } from "@xstyled/emotion";
import { useComponentTheme } from "hooks/useComponentTheme";
import { useMemo } from "react";
import { anolisComponent } from "utils/anolisComponent";

import { TypographyThemeProps, TypographyVariant } from "./theme";
import { PseudoProp } from "../../utils/PseudoProp";

export * from "./theme";

interface TypographyProps extends TypographyThemeProps { }

export const Typography = anolisComponent<"div", TypographyProps, TypographyVariant>("div", ({
  v,
  s,
  ...props
}, ref) => {
  const theme = useComponentTheme("typography", v);

  const _theme = useMemo(() => ({
    _h1: theme._h1,
    _h2: theme._h2,
    _h3: theme._h3,
    _h4: theme._h4,
    _h5: theme._h5,
    _h6: theme._h6,
    _p: theme._p,
    _lead: theme._lead
  }), [theme._h1, theme._h2, theme._h3, theme._h4, theme._h5, theme._h6, theme._lead, theme._p]);

  return (
    <TypographyStyle ref={ref} _theme={_theme} {...theme} {...props} />
  );
});

interface TypographyStyleProps extends Partial<Record<Keys, PseudoProp>> {
  _theme: TypographyThemeProps;
}

type Keys = Exclude<keyof TypographyThemeProps, keyof PseudoProp>;

const typoCss = (t: Keys) => (p: TypographyStyleProps) => {
  return (
    css((_p) => ({
      ...p._theme[t],
      ...p[t]
    }) as any));
};

const TypographyStyle = styled.divBox<TypographyStyleProps>`
  h1, ._anolis-as-h1 {
    ${typoCss("_h1")}
  }

  h2, ._anolis-as-h2 {
    ${typoCss("_h2")}
  }

  h3, ._anolis-as-h3 {
    ${typoCss("_h3")}
  }

  h4, ._anolis-as-h4 {
    ${typoCss("_h2")}
  }

  h5, ._anolis-as-h5 {
    ${typoCss("_h5")}
  }

  h6, ._anolis-as-h6 {
    ${typoCss("_h6")}
  }

  p, ._anolis-as-p {
    ${typoCss("_lead")}
  }

  ._anolis-as-lead {
    ${typoCss("_lead")}
  }
`;
