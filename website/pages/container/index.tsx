import { x } from "@xstyled/emotion";
import { AnolisProvider, Button, Container } from "anolis-ui";
import React, { FC } from "react";

const ContainerPage: FC = () => {
  return (
    <AnolisProvider>
      <x.div display="flex" flexDirection="column" spaceY="4" alignItems="flex-start">
        <x.h1 fontSize="4xl">
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
    </AnolisProvider>
  );
};

export default ContainerPage;
