import { x } from "@xstyled/emotion";
import { Tag } from "components/Tag";
import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";
import renderComponent from "utils/renderComponent";

import { CardThemeProps, CardVariant } from "./theme";

export * from "./theme";

export type CardProps = AnolisComponentProps<"div", CardThemeProps, CardVariant>;

export const Card = anolisComponent<"div", CardProps>("div", ({
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
  v,
  ...props
}, ref) => {
  const theme = useComponentTheme("card", v);

  return (
    <x.div
      {...theme}
      {...props}
      ref={ref as any}
    >
      {(header || title) && (
        <x.div {...theme._header} {..._header}>
          {header
            ? renderComponent(header)
            : (
              <x.span {...theme._title} {..._title}>
                {renderComponent(title)}
              </x.span>
            )}
        </x.div>
      )}

      {tag && (
        <Tag m={_header?.p ?? _header?.padding} {...theme._tag} {..._tag}>
          {renderComponent(tag)}
        </Tag>
      )}

      {media && (
        <x.div order={2} {...theme._media} {..._media}>
          {renderComponent(media)}
        </x.div>
      )}

      {body && (
        <x.div {...theme._body} {..._body}>
          {renderComponent(body)}
        </x.div>
      )}

      {children && (
        <x.div {...theme._body} {..._body}>
          {children}
        </x.div>
      )}

      {footer && (
        <x.div {...theme._footer} {..._footer}>
          {renderComponent(footer)}
        </x.div>
      )}
    </x.div>
  );
});

Card.displayName = "Card";
