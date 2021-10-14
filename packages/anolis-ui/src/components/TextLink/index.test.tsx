import { render, testA11y, testSnapshotMatch } from "utils/test";

import { TextLink } from ".";

test("should render", () => {
  render(
    <TextLink href="https://example.com">example.com</TextLink>
  );
});

test("should conform a11y", async () => {
  await testA11y(
    <TextLink href="https://example.com">example.com</TextLink>
  );
});

test("should match snapshot", () => {
  testSnapshotMatch(
    <TextLink href="https://example.com">example.com</TextLink>
  );
});
