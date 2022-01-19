import { x } from "@xstyled/emotion";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { ComponentProps, ElementType, ForwardedRef, ReactElement } from "react";
import { anolisComp } from "utils/anolisComponent";
import renderComponent, { Renderable } from "utils/renderComponent";
import { renderTriplet } from "utils/renderTriplet";

import { CardProps } from "./theme";

export * from "./theme";

type CardComponent = <
  THeader extends ElementType,
  TTitle extends ElementType,
  TTag extends ElementType,
  TMedia extends ElementType,
  TBody extends ElementType,
  TFooter extends ElementType
>(p: CardProps<THeader, TTitle, TTag, TMedia, TBody, TFooter>) => ReactElement | null;

export const Card: CardComponent = anolisComp("Card", (p, ref) => {
  const {
    $header, _header, header,
    $tag, _tag, tag,
    $title, _title, title,
    $media, _media, media,
    $body, _body, body,
    $footer, _footer, footer,
    children,
    ...props
  } = useThemePropsMerge("card", p);

  return (
    <x.div {...props} ref={ref}>
      {(header || title) && renderTriplet($header, _header, header
        ? renderComponent(header)
        : renderTriplet($title, _title, title)
      )}

      {tag && renderTriplet($tag, _tag, tag)}

      {media && renderTriplet($media, _media, media)}

      {body && renderTriplet($body, _body, body)}

      {children && renderTriplet($body, _body, children)}

      {footer && renderTriplet($footer, _footer, footer)}
    </x.div>
  );
});
