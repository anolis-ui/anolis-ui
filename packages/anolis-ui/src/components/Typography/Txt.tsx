import { x } from "@xstyled/emotion";
import { AnolisBaseProps, anolisComp, anolisComponent } from "utils/anolisComponent";
import { TxtProps } from "./theme";
import { ReactElement } from "react";

type TxtComponent = (props: TxtProps) => ReactElement | null;

export const Txt: TxtComponent = anolisComp("Txt", ({ t, ...props }, ref) => {
  return <x.p ref={ref} {...props} className={`_anolis-as-${t} ${props.className ?? ""}`} />;
});
