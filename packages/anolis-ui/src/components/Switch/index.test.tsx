import { render, testA11y, testSnapshotMatch } from "utils/test";

import { Switch } from ".";

test("should render", () => {
  render(
    <Switch />
  );
});

test("should conform a11y", async () => {
  await testA11y(
    <Switch label="Toggle dark mode" />
  );
});

test("should match snapshot", () => {
  testSnapshotMatch(
    <Switch />
  );
});
