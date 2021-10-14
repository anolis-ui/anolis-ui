import { render, testA11y, testSnapshotMatch } from "utils/test";

import { Checkbox } from ".";

test("should render", () => {
  render(
    <Checkbox>Label</Checkbox>
  );
});

test("should conform a11y", async () => {
  await testA11y(
    <Checkbox>Label</Checkbox>
  );
});

test("should match snapshot", () => {
  testSnapshotMatch(
    <Checkbox>Label</Checkbox>
  );
});
