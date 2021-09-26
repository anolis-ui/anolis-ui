import { Moon, Sun } from "@emotion-icons/feather";
import { x } from "@xstyled/emotion";
import { FC, useState } from "react";
import { sketch, SketchLayout } from "sketch";

import { Switch } from ".";

const Variants: FC = sketch(() => {
  const [state, setState] = useState(false);

  return (
    <SketchLayout title="Switch">
      <x.div display="flex" spaceX="2" alignItems="center" w="100%">
        <Switch s="sm">
          Switch SM
        </Switch>

        <Switch s="md">
          Switch MD
        </Switch>

        <Switch
          s="lg"
          _knobActive={{
            bg: "red"
          }}
        >
          Switch LG
        </Switch>

        <Switch
          s="lg"
          knob={state ? <Moon size={16} /> : <Sun size={16} />}
          checked={state}
          onChange={(e: any) => setState(e.target.checked)}
        >
          Night mode
        </Switch>

        <Switch s="lg" disabled>
          Disabled
        </Switch>
      </x.div>
    </SketchLayout>
  );
});

export default Variants;
