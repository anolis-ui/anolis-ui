import { DefaultTheme, defaultTheme as xdefaultTheme } from "@xstyled/emotion";

import { AnolisTheme, emptyTheme } from "./theme";

export interface ThemeWithAnolis extends DefaultTheme {
  anolis: AnolisTheme;
}

export const defaultTheme = {
  ...xdefaultTheme,
  colors: {
    ...xdefaultTheme.colors,
    "anolis-blue": "#0171b6",
    "primary": "#0171b6",
    "primaryHover": "#0169A9",
    "primaryFocus": "#01619D",
    "primaryActive": "#0171B6"
  },
  fonts: {
    ...xdefaultTheme.fonts,
    // eslint-disable-next-line @typescript-eslint/quotes
    sans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
  },
  fontSizes: {
    "xs": "0.75rem",
    "sm": "0.875rem",
    "base": "1rem",
    "lg": "1.125rem",
    "xl": "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  },
  // screens: {
  // xxs: "22.5em",
  // xs: "30em",
  // sm: "48em",
  // md: "64em",
  // lg: "78em",
  // xl: "85em",
  // xxl: "94em"
  // },
  anolis: emptyTheme
};
