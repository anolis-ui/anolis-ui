import { x } from "@xstyled/emotion";
import { Container, Typography } from "anolis-ui";
import { FC } from "react";
import Ui from "components/Ui";

const TagPage: FC = () => {
  return (
    <Ui>
      <Container>
        <x.h1>
          Tag
        </x.h1>
      </Container>
    </Ui>
  );
};

export default TagPage;
