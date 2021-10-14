import { render, testA11y, testSnapshotMatch } from "utils/test";

import { Spinner } from ".";

test("should render", () => {
  render(
    <Spinner />
  );
});

test("should conform a11y", async () => {
  await testA11y(
    <Spinner />
  );
});

test("should match snapshot", () => {
  testSnapshotMatch(
    <Spinner />
  );
});
