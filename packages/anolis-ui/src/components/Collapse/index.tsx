import { motion, Variants } from "framer-motion";
import { useComponentTheme, useThemePropsMerge } from "hooks/useComponentTheme";
import { FC } from "react";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";
import { xstyled } from "utils/createXStyled";

import { CollapseThemeProps } from "./theme";

export * from "./theme";

// Simple Collapse component, originally implemented by Chakra UI
// https://github.com/chakra-ui/chakra-ui/blob/main/packages/transition/src/collapse.tsx

export type CollapseProps = AnolisComponentProps<"div", CollapseThemeProps & CollapseOptions>;

interface CollapseOptions {
  open: boolean;
  /**
   * If `true`, the opacity of the content will be animated
   * @default true
   */
  animateOpacity?: boolean;
  /**
   * The height you want the content in its collapsed state.
   * @default 0
   */
  startingHeight?: number | string;
  /**
   * The height you want the content in its expanded state.
   * @default "auto"
   */
  endingHeight?: number | string;
}

export const Collapse = anolisComponent<"div", CollapseProps>("div", (p, ref) => {
  const props = useThemePropsMerge("collapse", p);

  return (
    <CustomCollapseBox {...props} />
  );
});

Collapse.displayName = "Collapse";

const InnerCollapse: FC<CollapseOptions> = ({
  children,
  open,
  animateOpacity = true,
  startingHeight = 0,
  endingHeight = "auto",
  ...p
}) => {
  return (
    <motion.div
      {...p}
      initial="exit"
      animate={open ? "enter" : "exit"}
      custom={{
        startingHeight,
        animateOpacity,
        endingHeight
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const CustomCollapseBox = xstyled(InnerCollapse)``;

export const ease = [0.25, 0.1, 0.25, 1] as const;

const variants: Variants = {
  exit: ({ animateOpacity, startingHeight }) => ({
    ...animateOpacity && { opacity: startingHeight === 0 ? 0 : 1 },
    overflow: "hidden",
    height: startingHeight,
    transition: {
      height: { duration: 0.2, ease },
      opacity: { duration: 0.3, ease }
    }
  }),
  enter: ({ animateOpacity, endingHeight }) => ({
    ...animateOpacity && { opacity: 1 },
    height: endingHeight,
    transitionEnd: { overflow: endingHeight === "auto" ? "initial" : "hidden" },
    transition: {
      height: { duration: 0.3, ease },
      opacity: { duration: 0.4, ease }
    }
  })
};
