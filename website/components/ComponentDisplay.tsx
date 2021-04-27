import { x } from "@xstyled/emotion";
import { FC, ReactNode } from "react";
import { CodeHighlight } from "./CodeBlock";
import { AnolisProvider, Button, defaultTheme, Txt, Typography } from "anolis-ui";

interface Props {
  children: [ReactNode, string][];
}

export const ComponentDisplay = ({ children }: Props) => {
  console.log(defaultTheme.anolis.typography.baseStyle._lead);

  return (
    <AnolisProvider>
      <Typography
        _h1={{ ...defaultTheme.anolis.typography.baseStyle._h1, fontFamily: "sans", marginBottom: 0 }}
        _h2={{ ...defaultTheme.anolis.typography.baseStyle._h2, fontFamily: "sans", marginBottom: 0 }}
        _h3={{ ...defaultTheme.anolis.typography.baseStyle._h3, fontFamily: "sans", marginBottom: 0 }}
        _h4={{ ...defaultTheme.anolis.typography.baseStyle._h4, fontFamily: "sans", marginBottom: 0 }}
        _h5={{ ...defaultTheme.anolis.typography.baseStyle._h5, fontFamily: "sans", marginBottom: 0 }}
        _h6={{ ...defaultTheme.anolis.typography.baseStyle._h6, fontFamily: "sans", marginBottom: 0 }}
        _p={{ ...defaultTheme.anolis.typography.baseStyle._p, fontFamily: "sans", marginBottom: 0 }}
        _lead={{ ...defaultTheme.anolis.typography.baseStyle._lead, fontFamily: "sans", marginBottom: 0 }}
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
