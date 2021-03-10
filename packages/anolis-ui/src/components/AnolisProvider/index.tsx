import { defaultTheme, Preflight, ThemeProvider } from "@xstyled/emotion";
import ModalProvider from "components/Modal/ModalProvider";
import { Typography } from "components/Typography";
import { FC, useMemo } from "react";
import { emptyTheme, AnolisTheme } from "theme";

export type AnolisProviderProps = {
  theme?: AnolisTheme | null;
  xstyledTheme?: {};

  noPreflight?: boolean;
};

const AnolisProvider: FC<AnolisProviderProps> = ({ children, theme, xstyledTheme, noPreflight }) => {
  const mergedTheme = useMemo<any>(() => ({
    ...defaultTheme,
    ...xstyledTheme,
    colors: {
      ...defaultTheme.colors,
      "anolis-blue": "#0171b6",
      "primary": "#0171b6",
      "primaryHover": "#0169A9",
      "primaryFocus": "#01619D",
      "primaryActive": "#0171B6"
    },
    fonts: {
      ...defaultTheme.fonts,
      // eslint-disable-next-line @typescript-eslint/quotes
      sans: `"rubik", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
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
    anolis: theme ?? emptyTheme
  }), [theme, xstyledTheme]);

  return theme !== null
    ? (
      <ThemeProvider theme={mergedTheme}>
        {!noPreflight && <Preflight />}
        <Typography>
          <ModalProvider>{children}</ModalProvider>
        </Typography>
      </ThemeProvider>
    )
    : <ModalProvider>{children}</ModalProvider>;
};

export default AnolisProvider;
