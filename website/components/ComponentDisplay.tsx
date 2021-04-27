import { x } from "@xstyled/emotion";
import { FC, ReactNode } from "react";
import { CodeHighlight } from "./CodeBlock";
import { AnolisProvider, Button } from "anolis-ui";

interface Props {
  children: [ReactNode, string][];
}

export const ComponentDisplay = ({ children }: Props) => {
  return (
    <AnolisProvider>
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
    </AnolisProvider>
  );
};

const tdStyle = {
  p: 6
} as const;
