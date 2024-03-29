import { FC, useState, ComponentType, ReactNode } from "react";

import { ModalContext, ModalInstanceContext } from "./data";

interface ModalState {
  position: number;
  queue: [ComponentType<any>, any][];
}

const ModalProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [{ position, queue }, setState] = useState<ModalState>({ position: -1, queue: [] });

  const context: ModalContext = {
    push: (m, props) => {
      setState(s => ({
        position: s.position + 1,
        queue: [...s.queue, [m, props]]
      }));
    },
    replace: (m, props) => {
      setState(s => ({
        position: s.position + 1,
        queue: [...s.queue.slice(0, -1), [m, props]]
      }));
    },

    pop: () => {
      setState(s => ({
        position: s.position - 1,
        queue: [...s.queue.slice(0, -1)]
      }));
    },

    go: (n, a) => setState(s => ({
      position: a ? n : s.position + n,
      queue: s.queue
    })),
    back: () => setState(s => ({
      position: s.position - 1,
      queue: s.queue
    })),
    forward: () => setState(s => ({
      position: s.position + 1,
      queue: s.queue
    }))
  };

  return (
    <ModalContext.Provider value={context}>
      {children}
      {position !== -1 && queue.map(([M, props], i) => (
        <ModalInstanceContext.Provider key={i} value={{ hide: i !== position }}>
          <M {...props} />
        </ModalInstanceContext.Provider>
      ))}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
