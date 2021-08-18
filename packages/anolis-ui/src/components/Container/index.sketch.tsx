import { x } from "@xstyled/emotion";
import { Container } from "components/Container";
import { sketch, SketchLayout } from "sketch";

const Normal = sketch(() => {
  return (
    <SketchLayout title="Container">
      <x.div display="flex" spaceX="2" alignItems="center">
        <Container>
          <x.div w="100%" h="10rem" bg="primary" />
        </Container>
      </x.div>
      <x.div display="flex" spaceX="2" alignItems="center">
        <Container v="fluid">
          <x.div w="100%" h="10rem" bg="primary" />
        </Container>
      </x.div>
    </SketchLayout>
  );
});

export default Normal;
