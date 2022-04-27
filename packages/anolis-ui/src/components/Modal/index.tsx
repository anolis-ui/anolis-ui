import Portal from "@reach/portal";
import { x } from "@xstyled/emotion";
import { CloseControl } from "components/Control/CloseControl";
import { Txt } from "components/Typography/Txt";
import { useThemePropsMerge } from "hooks/useComponentTheme";
import { useContext, useEffect, useRef } from "react";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";
import { renderable } from "utils/renderable";

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

export const Modal = anolisComponent<"div", ModalProps>("div", (p, _ref) => {
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
                ? renderable(header)
                : (
                  <Txt t="h3" as="div" {..._title}>
                    {renderable(title)}
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

Modal.displayName = "Modal";
