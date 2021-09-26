import { x } from "@xstyled/emotion";
import { Tag } from "components/Tag";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";
import renderComponent from "utils/renderComponent";

import { CardThemeProps, CardVariant } from "./theme";

export * from "./theme";

export type CardProps = AnolisComponentProps<"div", CardThemeProps, CardVariant>;

export const Card = anolisComponent<"div", CardProps>("div", (p, ref) => {
  const {
    _header,
    header,
    _tag,
    tag,
    _title,
    title,
    _media,
    media,
    _body,
    body,
    _footer,
    footer,
    children,
    ...props
  } = useThemePropsMerge("card", p);

  return (
    <x.div {...props} ref={ref}>
      {(header || title) && (
        <x.div {..._header}>
          {header
            ? renderComponent(header)
            : (
              <x.span {..._title}>
                {renderComponent(title)}
              </x.span>
            )}
        </x.div>
      )}

      {tag && (
        <Tag m={_header?.p ?? _header?.padding} {..._tag}>
          {renderComponent(tag)}
        </Tag>
      )}

      {media && (
        <x.div order={2} {..._media}>
          {renderComponent(media)}
        </x.div>
      )}

      {body && (
        <x.div {..._body}>
          {renderComponent(body)}
        </x.div>
      )}

      {children && (
        <x.div {..._body}>
          {children}
        </x.div>
      )}

      {footer && (
        <x.div {..._footer}>
          {renderComponent(footer)}
        </x.div>
      )}
    </x.div>
  );
});

Card.displayName = "Card";
