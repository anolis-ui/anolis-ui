import { AnolisProvider } from "anolis-ui";
import { AppProps } from "next/app";
import { FC } from "react";
import { theme } from "theme";
import { xstyledTheme } from "theme/xstyled";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnolisProvider xstyledTheme={xstyledTheme} theme={theme}>
      <Component {...pageProps} />
    </AnolisProvider>
  );
};

export default App;
