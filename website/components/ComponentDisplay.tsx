import { x } from "@xstyled/emotion";
import { FC, ReactNode } from "react";
import { CodeHighlight } from "./CodeBlock";
import { Button } from "anolis-ui";

interface Props {
  children: [ReactNode, string][];
}

export const ComponentDisplay = ({ children }: Props) => {
  return (
    <x.div my="6" borderRadius="default" boxShadow="xl" overflow="hidden">
      <x.table w="100%" style={{ borderSpacing: 0 }}>
        {children.map(([a, b], i) => (
          <tr key={i}>
            <x.td {...tdStyle} maxWidth="35%" pr="6" pt={i === 0 ? "12" : undefined} pb={i === children.length - 1 ? "12" : undefined}>
              {a}
            </x.td>
            <x.td
              {...tdStyle}
              bg="#1E1E1E"
              fontSize="sm"
              pt={i === 0 ? "12" : undefined}
              pb={i === children.length - 1 ? "12" : undefined}
            >
              <CodeHighlight code={b} />
            </x.td>
          </tr>
        ))}
      </x.table>
    </x.div>
  );
};

const tdStyle = {
  p: 6
} as const;
