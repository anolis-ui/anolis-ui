import { SSRProvider } from "@react-aria/ssr";
import { Preflight, ThemeProvider, useTheme } from "@xstyled/emotion";
import ModalProvider from "components/Modal/ModalProvider";
import { Typography } from "components/Typography";
import { FC, ReactNode, useMemo } from "react";
import { AnolisTheme, emptyTheme } from "theme";

export type AnolisProviderProps = {
  theme?: AnolisTheme | null;
  /** @deprecated use ThemeProvider directly instead */
  xstyledTheme?: {};

  noPreflight?: boolean;

  children?: ReactNode;
};

const AnolisProvider: FC<AnolisProviderProps> = ({ children, theme, xstyledTheme, noPreflight }) => {
  const contextTheme = useTheme();

  const mergedTheme = useMemo<any>(() => ({
    ...xstyledTheme ?? contextTheme,
    anolis: theme ?? emptyTheme
  }),
  [contextTheme, theme, xstyledTheme]);

  if (process.env.NODE_ENV !== "production" && xstyledTheme && !deprecatedXstyledThemeWarning) {
    deprecatedXstyledThemeWarning = true;
    console.warn(
      "Warning: You are using xstyledTheme prop of AnolisProvider, which is deprecated, please use xstyled ThemeProvider directly instead."
    );
  }

  return (
    <SSRProvider>
      {theme !== null
        ? (
          <ThemeProvider theme={mergedTheme}>
            {!noPreflight && <Preflight />}
            <Typography topLevel>
              <ModalProvider>{children}</ModalProvider>
            </Typography>
          </ThemeProvider>
        )
        : <ModalProvider>{children}</ModalProvider>}
    </SSRProvider>
  );
};

export default AnolisProvider;

let deprecatedXstyledThemeWarning = false;
