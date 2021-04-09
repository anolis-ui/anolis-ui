import { x } from "@xstyled/emotion";
import { Container, Typography } from "anolis-ui";
import { FC } from "react";
import Ui from "components/Ui";

const TypographyPage: FC = () => {
  return (
    <Ui>
      <Container>
        <x.h1>
          Typography
        </x.h1>
      </Container>
    </Ui>
  );
};

export default TypographyPage;
