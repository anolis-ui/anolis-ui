import { graphql, useStaticQuery, Link } from "gatsby";
import { ComponentType, FC } from "react";
import { ThemeProvider, x } from "@xstyled/emotion";
import { defaultTheme } from "../defaultTheme";

const Ui: FC = ({ children }) => {
  const { pages } = useStaticQuery<{pages: { nodes: {path: string}[]}}>(graphql`{ pages: allSitePage { nodes { path } } }`);
  return (
    <ThemeProvider theme={defaultTheme}>
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
