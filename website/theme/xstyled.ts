import { defaultTheme, Theme } from "@xstyled/system";
import { defaultTheme as anolisTheme } from "anolis-ui";

export const xstyledTheme: Theme = {
  screens: {
    ...defaultTheme.screens,
    _: 0
  },
  fonts: {
    ...anolisTheme.fonts,
    "heading-sans": "'Sora', sans-serif"
  },
  colors: {
    ...anolisTheme.colors,
    discord: "#7289DA"
  }
};
