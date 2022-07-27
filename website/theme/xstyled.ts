import { defaultTheme, Theme } from "@xstyled/system";
import { anolisXstyledTheme } from "anolis-ui";

export const xstyledTheme: Theme = {
  screens: {
    ...defaultTheme.screens,
    _: 0
  },
  fonts: {
    ...anolisXstyledTheme.fonts,
    "heading-sans": "'Sora', sans-serif"
  },
  colors: {
    ...anolisXstyledTheme.colors,
    discord: "#7289DA"
  }
};
