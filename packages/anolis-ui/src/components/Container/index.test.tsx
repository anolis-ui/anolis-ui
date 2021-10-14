import { render, testA11y, testSnapshotMatch } from "utils/test";

import { Container } from ".";

test("should render", () => {
  render(
    <Container>Content</Container>
  );
});

test("should conform a11y", async () => {
  await testA11y(
    <Container>Content</Container>
  );
});

test("should match snapshot", () => {
  testSnapshotMatch(
    <Container>Content</Container>
  );
});
