import { AnolisProvider, Container } from "anolis-ui";
import { MDXProvider } from "@mdx-js/react";
import { AppProps } from "next/app";
import { FC } from "react";
import { theme } from "theme";
import { xstyledTheme } from "theme/xstyled";
import Ui from "components/Ui";
import { CodeBlock } from "../components/CodeBlock";

const components = {
  code: CodeBlock
};

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const isMdx = (Component as any).isMDXComponent;
  return (
    <AnolisProvider xstyledTheme={xstyledTheme} theme={theme}>
      {isMdx
        ? (

          <Ui>
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
