import { render, testA11y, testSnapshotMatch } from "utils/test";

import { Input } from ".";

test("should render", () => {
  render(
    <Input />
  );
});

test("should conform a11y", async () => {
  await testA11y(
    <label>
      Username
      <Input />
    </label>
  );
});

test("should match snapshot", () => {
  testSnapshotMatch(
    <Input />
  );
});
