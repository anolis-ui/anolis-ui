import { defaultTheme, SystemProps, ThemeProvider, x } from "@xstyled/emotion";
import AnolisProvider from "components/AnolisProvider";
import { graphql, Link, useStaticQuery } from "gatsby";
import { ComponentType, FC, ReactNode } from "react";
import { Container } from "../components/Container/index";

import { anolisXstyledTheme, pipeThemes } from "../defaultTheme";
import { emptyTheme } from "../theme";

export * from "./faker";

const Ui: FC<{ children?: ReactNode }> = ({ children }) => {
  const { pages } = useStaticQuery<{pages: { nodes: {path: string}[]}}>(graphql`{ pages: allSitePage { nodes { path } } }`);
  return (
    <ThemeProvider theme={debugTheme}>
      <AnolisProvider theme={emptyTheme}>
        <x.div display="flex" w="100vw" h="100vh">
          <x.div p="4" flexShrink={0} boxShadow="xl" minWidth="15rem">
            <x.h1 fontSize="xl">Anolis UI</x.h1>
            <ul>
              {pages.nodes.map(({ path }) =>
                <x.li key={path} lineHeight="loose"><Link to={path}>{path.slice(1).slice(0, -14)}</Link></x.li>
              )}
            </ul>
          </x.div>
          <x.div overflow="scroll" px="8" py="4" flexGrow={1}>
            {children}
          </x.div>
        </x.div>
      </AnolisProvider>
    </ThemeProvider>
  );
};

export const sketch = <T extends {}>(C: ComponentType<T>) => {
  const Sketch = (p: T) => {
    return (
      <Ui>
        <C {...p} />
      </Ui>
    );
  };

  return Sketch;
};

const SketchHomepage = sketch(() => {
  return (
    <SketchLayout title="Homepage">
      Homepage
    </SketchLayout>
  );
});

export default SketchHomepage;
interface SketchLayoutProps extends SystemProps {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export const SketchLayout: FC<SketchLayoutProps> = ({ title, description, children, ...p }) => {
  return (
    <ThemeProvider theme={debugTheme}>
      <AnolisProvider theme={emptyTheme}>
        <Container display="flex" flexDirection="column" gap="4.5rem" {...p}>
          <x.div mb="-1.5rem">
            {title && <x.h1>{title}</x.h1>}
            {description && <x.p>{description}</x.p>}
          </x.div>

          {children}
        </Container>
      </AnolisProvider>
    </ThemeProvider>
  );
};

const debugTheme = pipeThemes(defaultTheme, anolisXstyledTheme, {
  states: Object.fromEntries(
    Object.entries(defaultTheme.states)
      .map(([k, s]) => [k, s ? `${s}, &._${k}` : s])
  ) as any
});
