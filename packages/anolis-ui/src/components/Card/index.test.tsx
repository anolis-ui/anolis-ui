import { x } from "@xstyled/emotion";
import { render, testA11y, testSnapshotMatch } from "utils/test";

import { Card } from ".";

test("should render", () => {
  render(
    <Card
      title="Card title"
      media={<x.img src="http://placekitten.com/500/300" alt="cat" />}
      footer={<x.p>Footer</x.p>}
    >
      Text text text
    </Card>
  );
});

test("should conform a11y", async () => {
  await testA11y((
    <>
      <Card
        title="Card title"
        media={<x.img src="http://placekitten.com/500/300" alt="cat" />}
        footer={<x.p>Footer</x.p>}
      >
        Text text text
      </Card>
    </>
  ));
});

test("should match snapshot", () => {
  testSnapshotMatch(
    <Card
      title="Card title"
      media={<x.img src="http://placekitten.com/500/300" alt="cat" />}
      footer={<x.p>Footer</x.p>}
    >
      Text text text
    </Card>
  );
});
