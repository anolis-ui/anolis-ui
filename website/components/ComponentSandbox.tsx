import { x } from "@xstyled/emotion";
import { FC, useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import { Card } from "anolis-ui";

export const ComponentSandbox: FC = () => {
  const [state, setState] = useState(() => Object.fromEntries(cardProps.map(p => [p, true])));

  return (
    <x.div display="flex" alignItems="center">
      <x.div flexShrink={0} p="6">
        <Card
          v="elevated"
          title={state.title ? "Title" : undefined}
          tag={state.tag ? "test" : undefined}
          footer={state.footer ? "Card footer" : undefined}
        >
          Lorem ipsum dolor sit amet
        </Card>

      </x.div>
      <x.div bg="#1e1e1e" p="6" flexGrow={1}>
        <Highlight {...defaultProps} theme={theme} code={code.trim()} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <>
                      {token.types[0] === "tag" && token.types[1] === "attr-name"
                        ? (
                          <>
                            <x.input
                              type="checkbox"
                              display="inline-block"
                              mr="2"
                              checked={state[token.content]}
                              onChange={() => setState(s => ({ ...s, [token.content]: !s[token.content] }))}
                            />
                            <span key={key} {...getTokenProps({ token, key })} />
                          </>
                        )
                        : <span key={key} {...getTokenProps({ token, key })} />}

                    </>
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </x.div>
    </x.div>

  );
};

const code = `
<Card
  title="Title"
  tag="test"
  footer="Card footer"
>
  Lorem ipsum dolor sit amet
</Card>
`;

const cardProps = [
  "header",
  "title",
  "tag",
  "media",
  "body",
  "footer"
];
