import { x } from "@xstyled/emotion";
import { Container } from "anolis-ui";
import React, { FC } from "react";
import Ui from "components/Ui";

const ContainerPage: FC = () => {
  return (
    <Ui>
      <x.div display="flex" flexDirection="column" spaceY="4" alignItems="flex-start">
        <x.h1 fontSize="4rem">
          Container
        </x.h1>
        <x.h2 fontSize="2xl">
          Variants
        </x.h2>
        <x.p>
          Container has 2 variants. <x.strong>normal</x.strong> and <x.strong>fluid</x.strong>
        </x.p>
        <Container>
          <x.h2 fontSize="2xl">
            Normal
          </x.h2>
          <x.div w="100%" h="10rem" bg="primary" />
        </Container>
        <Container v="fluid">
          <x.h2 fontSize="2xl">
            Fluid
          </x.h2>
          <x.div w="100%" h="10rem" bg="primary" />
        </Container>
      </x.div>
    </Ui>
  );
};

export default ContainerPage;
