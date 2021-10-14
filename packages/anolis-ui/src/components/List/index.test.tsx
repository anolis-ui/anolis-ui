import { render, testA11y, testSnapshotMatch } from "utils/test";

import { List } from ".";
import { ListItem } from "./ListItem";

test("should render", () => {
  render(
    <List>
      <ListItem>Item one</ListItem>
      <ListItem>Item two</ListItem>
      <ListItem>Item three</ListItem>
      <ListItem>Item four</ListItem>
    </List>
  );
});

test("should conform a11y", async () => {
  await testA11y(
    <List>
      <ListItem>Item one</ListItem>
      <ListItem>Item two</ListItem>
      <ListItem>Item three</ListItem>
      <ListItem>Item four</ListItem>
    </List>
  );
});

test("should match snapshot", () => {
  testSnapshotMatch(
    <List>
      <ListItem>Item one</ListItem>
      <ListItem>Item two</ListItem>
      <ListItem>Item three</ListItem>
      <ListItem>Item four</ListItem>
    </List>
  );
});
