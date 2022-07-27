import { x } from "@xstyled/emotion";
import { AnolisProvider, createTheme, Typography } from "anolis-ui";
import { ReactNode } from "react";

import { CodeHighlight } from "./CodeBlock";

interface Props {
  children: [ReactNode, string][];
}

const theme = createTheme();

export const ComponentDisplay = ({ children }: Props) => {
  return (
    <AnolisProvider>
      <Typography
        _h1={{ ...theme.typography.baseStyle._h1, fontFamily: "sans", marginBottom: 0 }}
        _h2={{ ...theme.typography.baseStyle._h2, fontFamily: "sans", marginBottom: 0 }}
        _h3={{ ...theme.typography.baseStyle._h3, fontFamily: "sans", marginBottom: 0 }}
        _h4={{ ...theme.typography.baseStyle._h4, fontFamily: "sans", marginBottom: 0 }}
        _h5={{ ...theme.typography.baseStyle._h5, fontFamily: "sans", marginBottom: 0 }}
        _h6={{ ...theme.typography.baseStyle._h6, fontFamily: "sans", marginBottom: 0 }}
        _p={{ ...theme.typography.baseStyle._p, fontFamily: "sans", marginBottom: 0 }}
        _lead={{ ...theme.typography.baseStyle._lead, fontFamily: "sans", marginBottom: 0 }}
      >
        <x.div mb="8">
          <x.div w="100%">
            {children.map(([a, b], i) => (
              <x.div
                key={i}
                borderRadius="9"
                border="1px solid rgba(136, 138, 165, 0.25)"
                mt="3"
                overflow="hidden"
              >
                <x.div {...tdStyle}>
                  {a}
                </x.div>
                <x.div
                  {...tdStyle}
                  bg="#1E1E1E"
                  fontSize="sm"
                >
                  <CodeHighlight code={b} />
                </x.div>
              </x.div>
            ))}
          </x.div>
        </x.div>
      </Typography>
    </AnolisProvider>
  );
};

const tdStyle = {
  p: 6
} as const;
