import { DefaultTheme, defaultTheme as xdefaultTheme } from "@xstyled/emotion";

import { AnolisTheme, emptyTheme } from "./theme";

export interface ThemeWithAnolis extends DefaultTheme {
  anolis: AnolisTheme;
}

export const defaultTheme = {
  ...xdefaultTheme,
  colors: {
    ...xdefaultTheme.colors,
    "anolis-blue": "anolis-blue-600",
    "anolis-blue-50": "#dcf6ff",
    "anolis-blue-100": "#aedeff",
    "anolis-blue-200": "#7ec6ff",
    "anolis-blue-300": "#4db0ff",
    "anolis-blue-400": "#2199fe",
    "anolis-blue-500": "#0c7fe5",
    "anolis-blue-600": "#0063b3",
    "anolis-blue-700": "#004781",
    "anolis-blue-800": "#002a50",
    "anolis-blue-900": "#000f20",
    "anolis-green-50": "#e4fce9",
    "anolis-green-100": "#c1edcc",
    "anolis-green-200": "#9de1ae",
    "anolis-green-300": "#78d38e",
    "anolis-green-400": "#52c66f",
    "anolis-green-500": "#39ad55",
    "anolis-green-600": "#2a8641",
    "anolis-green-700": "#1b602e",
    "anolis-green-800": "#0d3b19",
    "anolis-green-900": "#001502",
    "anolis-gray-50": "#f0f0fc",
    "anolis-gray-100": "#d5d5e0",
    "anolis-gray-200": "#b9b9c6",
    "anolis-gray-300": "#9c9eae",
    "anolis-gray-400": "#808296",
    "anolis-gray-500": "#67687d",
    "anolis-gray-600": "#505162",
    "anolis-gray-700": "#393a46",
    "anolis-gray-800": "#21232c",
    "anolis-gray-900": "#070c15"
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
  states: {
    ...xdefaultTheme.states,
    groupHover: "[data-group]:hover &",
    disabled: "&:disabled, &[aria-disabled=true]",
    marker: "&::marker",
    invalid: "&:user-invalid, [data-a-invalid=true] &, [data-a-invalid=true]&"
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
