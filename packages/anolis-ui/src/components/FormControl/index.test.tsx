import { render, testA11y, testSnapshotMatch } from "utils/test";

import { FormControl } from ".";

test("should render", () => {
  render(
    <>
      <FormControl
        label="Username"
        error="This field is required"
      />
      <FormControl
        label="Password"
        help="Use strong password"
      />
    </>
  );
});

test("should conform a11y", async () => {
  await testA11y(
    <>
      <FormControl
        label="Username"
        error="This field is required"
      />
      <FormControl
        label="Password"
        help="Use strong password"
      />
    </>
  );
});

test("should match snapshot", () => {
  testSnapshotMatch(
    <>
      <FormControl
        label="Username"
        error="This field is required"
      />
      <FormControl
        label="Password"
        help="Use strong password"
      />
    </>
  );
});
