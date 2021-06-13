import { x } from "@xstyled/emotion";
import { PseudoProp } from "utils/PseudoProp";
import { anolisComponent } from "utils/anolisComponent";
import { useComponentTheme } from "hooks/useComponentTheme";

export interface TxtProps extends PseudoProp {
  t: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "lead";
}

export const Txt = anolisComponent<"p", TxtProps>("p", ({ v, t, ...props }, ref) => {
  return <x.p ref={ref as any} {...props} className={`_anolis-as-${t} ${props.className ?? ""}`} />;
});
