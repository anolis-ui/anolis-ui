import Portal from "@reach/portal";
import { x } from "@xstyled/emotion";
import { CloseControl } from "components/Control/CloseControl";
import { Txt } from "components/Typography/Txt";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { ElementType, ReactElement, useContext, useEffect, useRef } from "react";
import { anolisComp } from "utils/anolisComponent";
import renderComponent from "utils/renderComponent";

import { ModalContext, ModalInstanceContext } from "./data";
import { ModalProps } from "./theme";

export * from "./theme";
export * from "./data";

export type ModalComponent = <
  Title extends ElementType,
  Header extends ElementType,
  Close extends ElementType,
  Overlay extends ElementType
>(props: ModalProps<Title, Header, Close, Overlay>) => ReactElement | null;

export const Modal: ModalComponent = anolisComp("div", (p, _ref) => {
  const {
    children,
    onClose,
    persistent,
    _title,
    title,
    _header,
    header,
    _overlay,
    _close,
    ...props
  } = useThemePropsMerge("modal", p);
  const { hide } = useContext(ModalInstanceContext);
  const { pop } = useContext(ModalContext);
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      e.key === "Escape" && (onClose ?? pop)();
    };

    window.addEventListener("keyup", onEscape);

    return () => {
      window.removeEventListener("keyup", onEscape);
    };
  }, [onClose, pop, persistent]);

  return (
    <Portal>
      <x.div
        display={hide ? "none" : "flex"}
        onClick={(e: any) => {
          !persistent && !ref.current.contains(e.target) && (onClose ?? pop)();
        }}
        {..._overlay}
      >
        <x.div ref={ref} {...props}>
          <x.div onClick={onClose ?? pop}>
            <CloseControl {..._close} />
          </x.div>

          {(header || title) && (
            <x.div mb="2rem" {..._header}>
              {header
                ? renderComponent(header)
                : (
                  <Txt t="h3" as="div" {..._title}>
                    {renderComponent(title)}
                  </Txt>
                )}
            </x.div>
          )}

          {children}
        </x.div>
      </x.div>
    </Portal>
  );
});
