import { SSRProvider } from "@react-aria/ssr";
import { Preflight, ThemeProvider } from "@xstyled/emotion";
import ModalProvider from "components/Modal/ModalProvider";
import { Typography } from "components/Typography";
import { defaultTheme } from "defaultTheme";
import { FC, useMemo } from "react";
import { AnolisTheme } from "theme";

export type AnolisProviderProps = {
  theme?: AnolisTheme | null;
  xstyledTheme?: {};

  noPreflight?: boolean;
};

const AnolisProvider: FC<AnolisProviderProps> = ({ children, theme, xstyledTheme, noPreflight }) => {
  const mergedTheme = useMemo<any>(() => ({
    ...defaultTheme,
    ...xstyledTheme,
    anolis: theme ?? defaultTheme.anolis
  }), [theme, xstyledTheme]);

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
