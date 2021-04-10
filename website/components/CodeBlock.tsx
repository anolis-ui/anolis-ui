import { x } from "@xstyled/emotion";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import { FC } from "react";

export const CodeBlock: FC<{ children: string; className: string }> = ({ children, className: lang }) => {
  return (
    <x.div borderRadius="default" overflow="hidden" p="6" bg="#1E1E1E" fontSize="sm" my="4" boxShadow="xl">
      <CodeHighlight code={children} language={lang.replace("language-", "") as any} />
    </x.div>

  );
};

export const CodeHighlight: FC<{ code: string; language?: string }> = ({ code, language = "tsx" }) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={code.trim()} language={language.replace("language-", "") as any}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) =>
                <span key={key} {...getTokenProps({ token, key })} />
              )}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
