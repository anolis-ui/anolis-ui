import { x } from "@xstyled/emotion";
import { FC, ReactNode } from "react";
import { CodeHighlight } from "./CodeBlock";
import { Button } from "anolis-ui";

interface Props {
  children: [ReactNode, string][];
}

export const ComponentDisplay = ({ children }: Props) => {
  return (
    <x.div my="6" borderRadius="0.5rem" border="1px solid rgba(136, 138, 165, 0.25)" overflow="hidden">
      <x.table w="100%" style={{ borderSpacing: 0 }}>
        {children.map(([a, b], i) => (
          <x.div key={i}>
            <x.div {...tdStyle} maxWidth="35%" pr="6" pt={i === 0 ? "12" : undefined} pb={i === children.length - 1 ? "12" : undefined}>
              {a}
            </x.div>
            <x.div
              {...tdStyle}
              bg="#1E1E1E"
              fontSize="sm"
              pt={i === 0 ? "12" : undefined}
              pb={i === children.length - 1 ? "12" : undefined}
            >
              <CodeHighlight code={b} />
            </x.div>
          </x.div>
        ))}
      </x.table>
    </x.div>
  );
};

const tdStyle = {
  p: 6
} as const;
