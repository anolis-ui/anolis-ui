import Portal from "@reach/portal";
import { x } from "@xstyled/emotion";
import { CloseControl } from "components/Control/CloseControl";
import { Txt } from "components/Typography/Txt";
import { useComponentTheme } from "hooks/useComponentTheme";
import { useContext, useEffect, useRef } from "react";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";
import renderComponent from "utils/renderComponent";

import { ModalContext, ModalInstanceContext } from "./data";
import { ModalSize, ModalThemeProps } from "./theme";

export * from "./theme";
export * from "./data";

export type ModalProps = AnolisComponentProps<
"div",
ModalThemeProps & {
  /** If true, modal won't close when user clicks outside of the modal */
  persistent?: boolean;
  onClose?: () => unknown;
},
never,
ModalSize
>;

export const Modal = anolisComponent<"div", ModalProps>("div", ({
  children,
  onClose,
  persistent,
  s,
  _title,
  title,
  _header,
  header,
  _overlay,
  _close,
  ...p
}) => {
  const theme = useComponentTheme("modal", undefined, s);
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
        {...theme._overlay}
        {..._overlay}
      >
        <x.div ref={ref} {...theme} {...p}>
          <x.div onClick={onClose ?? pop}>
            <CloseControl {...theme._close} {..._close} />
          </x.div>

          {(header || title) && (
            <x.div mb="2rem" {...theme._header} {..._header}>
              {header
                ? renderComponent(header)
                : (
                  <Txt t="h3" as="div" {...theme._title} {..._title}>
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
