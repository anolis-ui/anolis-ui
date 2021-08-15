import { x } from "@xstyled/emotion";
import React, { FC } from "react";
import SketchLayout from "sketch/SketchLayout";

import { Card } from ".";

export default {
  title: "Themed/Card"
};

export const Normal: FC = () => {
  return (
    <SketchLayout title="Card">
      <x.div display="flex" justifyContent="space-around" spaceX="2" flexWrap="wrap">
        <Card
          title="Card title"
          media={<x.img src="http://placekitten.com/500/300" alt="cat" />}
          body={<LoremIpsum units="sentences" />}
          footer={<x.p>Footer</x.p>}
        />

        <Card
          title="Card title"
          tag="Tag"
          media={<x.img src="http://placekitten.com/500/300" alt="cat" />}
          body={<LoremIpsum units="sentences" />}
        />

        <Card
          title="Card title"
          tag="Tag"
          media={<x.img src="http://placekitten.com/500/300" alt="cat" />}
          body={<LoremIpsum units="sentences" />}
        />

        <Card
          tag="Tag"
          media={<x.img src="http://placekitten.com/500/300" alt="cat" />}
          body={<LoremIpsum units="sentences" />}
        />
      </x.div>
    </SketchLayout>
  );
};

const LoremIpsum: FC<any> = () => {
  return (
    <>text text text</>
  );
};
