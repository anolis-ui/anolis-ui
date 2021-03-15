import { defaultTheme, x } from "@xstyled/emotion";
import { FC } from "react";
import StoryLayout from "stories/StoryLayout";
import { List } from "components/List";
import { Button } from "components/Button";

export default {
  title: "Themed/List"
};

const theme = {
  ...defaultTheme
};

export const Normal: FC = () => {
  return (
    <StoryLayout title="List">
      <x.div display="flex" flexDirection="column" spaceY="2">

        <Button bg="red">
          aaa
        </Button>
        <List v="ordered" listStylePosition="inside" bg="red">
          <li>
            Ordered list item
          </li>
        </List>

        <List v="ordered" listStylePosition="outside">
          <li>
            Ordered list item
          </li>
        </List>

        <List v="unordered" listStylePosition="inside">
          <li>
            Unordered list item
          </li>
        </List>

        <List v="unordered" listStylePosition="outside">
          <li>
            Unordered list item
          </li>
        </List>
      </x.div>
    </StoryLayout>
  );
};
