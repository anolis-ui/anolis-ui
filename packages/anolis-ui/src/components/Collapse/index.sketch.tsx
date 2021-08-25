import { x } from "@xstyled/emotion";
import { useState } from "react";
import { sketch, SketchLayout, useParagraphs } from "sketch";

import { Collapse } from ".";

const CollapseSketch = sketch(() => {
  const [state, setState] = useState(false);

  const [p1, p2, p3] = useParagraphs(3, 20);

  return (
    <SketchLayout title="Collapse">
      <x.div spaceY="2">
        <button onClick={() => setState(s => !s)}>Toggle</button>
        <Collapse
          bg={{ _: "red-500", md: "blue-500", lg: "green-500" }}
          open={state}
        >
          <x.div p="2">{p1}</x.div>
        </Collapse>

        <Collapse
          bg={{ _: "red-500", md: "blue-500", lg: "green-500" }}
          startingHeight={30}
          endingHeight={103}
          open={state}
        >
          <x.div p="2">{p2}</x.div>
        </Collapse>

        <x.div>{p3}</x.div>
      </x.div>
    </SketchLayout>
  );
});

export default CollapseSketch;
