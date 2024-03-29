import { render, testA11y, testSnapshotMatch } from "utils/test";

import { Tag } from ".";

test("should render", () => {
  render(
    <Tag>Electronics</Tag>
  );
});

test("should conform a11y", async () => {
  await testA11y(
    <Tag>Electronics</Tag>
  );
});

test("should match snapshot", () => {
  testSnapshotMatch(
    <Tag>Electronics</Tag>
  );
});
