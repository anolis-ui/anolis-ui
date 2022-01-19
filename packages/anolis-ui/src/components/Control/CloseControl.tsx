import { X } from "@emotion-icons/feather";
import { anolisComp } from "utils/anolisComponent";

import { Control, ControlComponent } from ".";

export const CloseControl: ControlComponent = anolisComp("CloseControl", (p, ref) => {
  return <Control ref={ref} icon={<X />} {...p} />;
});
