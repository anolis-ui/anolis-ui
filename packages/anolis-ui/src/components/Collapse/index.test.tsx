import { x } from "@xstyled/emotion";
import { render, testA11y, testSnapshotMatch } from "utils/test";

import { Collapse } from ".";

test("should render", () => {
  render(
    <Collapse open>
      <x.div>Content inside</x.div>
    </Collapse>
  );
});

test("should conform a11y", async () => {
  await testA11y(
    <Collapse open>
      <x.div>Content inside</x.div>
    </Collapse>
  );
});

test("should match snapshot", () => {
  testSnapshotMatch(
    <Collapse open>
      <x.div>Content inside</x.div>
    </Collapse>
  );
});
