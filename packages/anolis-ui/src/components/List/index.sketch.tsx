import { x } from "@xstyled/emotion";
import { List } from "components/List";
import { ListItem } from "components/List/ListItem";
import { sketch, SketchLayout } from "sketch";

const Normal = sketch(() => {
  return (
    <SketchLayout title="List">
      <x.div display="flex" flexDirection="column" spaceY="2">

        <List v="ordered" listStylePosition="inside" bg="red">
          <ListItem>
            Ordered list item
          </ListItem>
        </List>

        <List v="ordered" listStylePosition="outside" bg="green">
          <ListItem>
            Ordered list item
          </ListItem>
          <ListItem>
            Ordered list item
          </ListItem>
        </List>

        <List v="unordered" listStylePosition="outside">
          <ListItem>
            Unordered list item with custom icon
          </ListItem>
          <ListItem>
            Unordered list item with custom icon
          </ListItem>
        </List>

        <List v="unordered" listStylePosition="inside">
          <ListItem>
            Unordered list item
          </ListItem>
          <ListItem>
            Unordered list item
          </ListItem>
        </List>

        <List v="unordered" listStylePosition="outside">
          <ListItem>
            Unordered list item
          </ListItem>
          <ListItem>
            Unordered list item
          </ListItem>
        </List>
      </x.div>
    </SketchLayout>
  );
});

export default Normal;
