import { x } from "@xstyled/emotion";
import { anolisComponent } from "utils/anolisComponent";

export interface TxtProps {
  t: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "lead";
}

export const Txt = anolisComponent<"p", TxtProps>("p", ({ t, ...props }, ref) => {
  return <x.p ref={ref} {...props} className={`_anolis-as-${t} ${props.className ?? ""}`} />;
});
