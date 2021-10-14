import { render, testA11y, testSnapshotMatch } from "utils/test";

import { Label } from ".";

test("should render", () => {
  render(
    <Label>Username</Label>
  );
});

test("should conform a11y", async () => {
  await testA11y(
    <Label>Username</Label>
  );
});

test("should match snapshot", () => {
  testSnapshotMatch(
    <Label>Username</Label>
  );
});
