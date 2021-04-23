import { Theme } from "@xstyled/system";
import { defaultTheme as anolisTheme } from "anolis-ui";

export const xstyledTheme: Theme = {
  fonts: {
    ...anolisTheme.fonts,
    "heading-sans": "'Sora', sans-serif"
  },
  colors: {
    ...anolisTheme.colors,
    discord: "#7289DA"
  }
};
