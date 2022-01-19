import { x } from "@xstyled/emotion";
import { ElementType } from "react";

import renderComponent, { Renderable } from "./renderComponent";
import { ElementProps } from "./theme";

export const renderTriplet = <E extends ElementType>(
  $: E | undefined,
  _: ElementProps<E> | undefined,
  children?: Renderable
) => {
  const Component = typeof $! === "string" ? x[$! as never] : $!;
  return children
    ? <Component {..._!}>{renderComponent(children)}</Component>
    : <Component {..._!} />;
};
