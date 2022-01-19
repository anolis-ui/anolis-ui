import { render, testA11y, testSnapshotMatch } from "utils/test";

import { Control } from ".";

test("should render", () => {
  render(
    <Control />
  );
});

test("should conform a11y", async () => {
  await testA11y(
    <Control />
  );
});

test("should match snapshot", () => {
  testSnapshotMatch(
    <Control />
  );
});
