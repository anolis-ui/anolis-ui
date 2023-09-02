import { AnolisProvider, Typography } from "anolis-ui";
import { MDXProvider } from "@mdx-js/react";
import { AppProps } from "next/app";
import { FC, useEffect } from "react";
import { theme } from "theme";
import { xstyledTheme } from "theme/xstyled";
import Ui from "components/Ui";
import { CodeBlock } from "components/CodeBlock";
import Head from "next/head";
import TagManager from "react-gtm-module";

const components = {
  code: CodeBlock
};

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const isMdx = (Component as any).isMDXComponent;

  useEffect(() => {
    TagManager.initialize({ gtmId: "G-GKVECKP0R8" });
  }, []);

  return (
    <>
      <Head>
        <title key="title">Anolis UI</title>

        <meta property="og:title" content="Anolis UI" key="og_title" />
        <meta
          name="description"
          content="Anolis UI is a nice component library for React offering high flexibility and themeability,
            but easy to setup with minimal config. Made for building beautiful design-systems or websites."
          key="description"
        />
        <meta
          property="og:description"
          content="Anolis UI is a nice component library for React offering high flexibility and themeability,
            but easy to setup with minimal config. Made for building beautiful design-systems or websites."
          key="og_description"
        />
        <meta property="og:image" content="/static/og-image.png" key="og_image" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anolis-ui.com" key="og_url" />
        <meta property="og:site_name" content="AnolisUI" />
        <meta property="og:locale" content="en_EN" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AnolisUI" />
        <meta name="theme-color" content="#45c264" />

        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#45c264" />
        <meta name="msapplication-TileColor" content="#45c264" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="/static/font/sora.css" />
      </Head>

      <AnolisProvider xstyledTheme={xstyledTheme} theme={theme}>
        {isMdx
          ? (
            <Ui showMenu>
              <MDXProvider components={components as any}>
                <Typography
                  _h1={{ ...theme.typography.baseStyle._h3, marginBottom: "1rem" }}
                  _h2={{ ...theme.typography.baseStyle._h4, marginBottom: "1rem" }}
                  _p={{ marginBottom: "1.5rem" }}
                >
                  <Component {...pageProps} />
                </Typography>
              </MDXProvider>
            </Ui>
          )
          : <Component {...pageProps} />}
      </AnolisProvider>

    </>
  );
};

export default App;
