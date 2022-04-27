import { ComponentType, ReactNode } from "react";
import { isValidElementType } from "react-is";

export type Renderable = ReactNode | ComponentType;

export const renderable = (C: Renderable): ReactNode =>
  typeof C !== "string" && isValidElementType(C)
    ? <C />
    : (C as ReactNode);
