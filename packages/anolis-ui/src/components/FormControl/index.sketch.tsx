import { x } from "@xstyled/emotion";
import { Input } from "index";
import { FC, useState } from "react";
import { sketch, SketchLayout } from "sketch";

import { FormControl } from ".";

const Normal: FC = sketch(() => {
  const [state, setState] = useState("");
  return (
    <SketchLayout title="Form control" spaceY={6}>
      <x.div spaceY={4}>
        <x.div>{state}</x.div>

        <FormControl
          label="Longitude"
          $field={Input}
          // _field={{ _input: { value: state, onChange: e => setState(e.target.value) } }}
          help="example: 17.9627153"
        />

        <FormControl
          label="Longitude"
          required
          $field={Input}
          _field={{ value: state, onChange: e => setState(e.target.value) }}
          help="example: 17.9627153"
          error="Wrong format"
        />
      </x.div>

      <x.div>
        <FormControl
          label="Longitude"
          $field={Input}
          _field={{ multiline: true }}
        />
      </x.div>

    </SketchLayout>
  );
});

export default Normal;
