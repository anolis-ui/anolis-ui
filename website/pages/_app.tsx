import { AnolisProvider, Container } from "anolis-ui";
import { MDXProvider } from "@mdx-js/react";
import { AppProps } from "next/app";
import { FC } from "react";
import { theme } from "theme";
import { xstyledTheme } from "theme/xstyled";
import Ui from "components/Ui";
import { CodeBlock } from "../components/CodeBlock";
import { createGlobalStyle } from "@xstyled/emotion";

const components = {
  code: CodeBlock
};

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const isMdx = (Component as any).isMDXComponent;
  return (
    <AnolisProvider xstyledTheme={xstyledTheme} theme={theme}>
      <GlobalStyle />

      {isMdx
        ? (

          <Ui showMenu>
            <Container>
              <MDXProvider components={components}>
                <Component {...pageProps} />
              </MDXProvider>
            </Container>
          </Ui>
        )
        : <Component {...pageProps} />}
    </AnolisProvider>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Sora';
    src: url('/static/font/sora-light.woff2') format('woff2'),
    url('/static/font/sora-light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sora';
    src: url('/static/font/sora-medium.woff2') format('woff2'),
    url('/static/font/sora-medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sora';
    src: url('/static/font/sora-regular.woff2') format('woff2'),
    url('/static/font/sora-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sora';
    src: url('/static/font/sora-semibold.woff2') format('woff2'),
    url('/static/font/sora-semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
`;
