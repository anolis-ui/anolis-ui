import { SystemProps } from "@xstyled/emotion";
import { Renderable } from "./renderComponent";
import { ComponentType, DOMAttributes, HTMLAttributes } from "react";

export type TripletProp<T extends string, P extends {} = {}> =
  & { [K in `_${T}`]?: AnolisThemeProps & P; }
  & { [K in T]?: Renderable; }
  & { [K in `$${T}`]?: ComponentType<P>; };

export type AnolisThemeProps =
  & SystemProps
  & Omit<HTMLAttributes<{}>, keyof DOMAttributes<{}> | "color">;
