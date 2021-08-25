/* eslint-disable @typescript-eslint/no-shadow */
import emStyled, { CreateStyled } from "@emotion/styled";
import { css, system } from "@xstyled/emotion";
import { StyleGenerator } from "@xstyled/system";

// xstyled does not expose a way to make custom "styled.*Box". Components made with styled() does not
// support utility props. This file contains simplified functions to create styled() with utility props.
// Original: https://github.com/gregberge/xstyled/blob/main/packages/emotion/src/createStyled.ts

type XCSSFunction = typeof css;

const getCreateStyle = (baseCreateStyle: any, css: XCSSFunction, generator: StyleGenerator) => {
  return (strings: any, ...args: any) => {
    if (Array.isArray(strings)) {
      strings = [...strings, "\n"];
    }
    args = [...args, generator];
    return baseCreateStyle((props: any) =>
      css(strings, ...flattenArgs(args, props))(props)
    );
  };
};

const createShouldForwardProp = (generator: StyleGenerator) => {
  const propSet = new Set(generator.meta.props);
  return (prop: string): boolean =>
    prop !== "as" && !prop.startsWith("$") && !propSet.has(prop);
};

export const createBaseStyled = (css: XCSSFunction, generator: StyleGenerator): CreateStyled => (
  (component: any, options: any) =>
    getCreateStyle(
      emStyled(component, {
        shouldForwardProp: createShouldForwardProp(generator),
        ...options
      }),
      css,
      generator
    )
) as CreateStyled;

export const createXStyled = <TGen extends StyleGenerator>(generator: TGen) => {
  const xstyled = createBaseStyled(css, generator);

  return xstyled;
};

const styleToString = (style: any, props: any): any => {
  if (Array.isArray(style)) {
    return style.reduce((str, style) => str + styleToString(style, props), "");
  }
  if (typeof style === "function") return styleToString(style(props), props);
  return style;
};

const flattenArgs = (arg: any, props: any): any => {
  if (typeof arg === "function") return flattenArgs(arg(props), props);
  if (Array.isArray(arg)) return arg.map((arg) => flattenArgs(arg, props));
  return arg;
};

export const xstyled = createXStyled(system);
