import "@testing-library/jest-dom";

import { render, screen, testA11y, testSnapshotMatch } from "utils/test";

import { Button } from ".";

test("should render", () => {
  render(<Button>Hello</Button>);

  expect(screen.getByRole("button")).toHaveTextContent("Hello");
});

test("should conform a11y", async () => {
  await testA11y((
    <>
      <Button>Hello</Button>
      <Button as="a" href="https://example.com">Hello</Button>
      <Button as="div">Hello</Button>
    </>
  ));
});

test("should match snapshot", () => {
  testSnapshotMatch(
    <Button>Hello</Button>
  );
});
