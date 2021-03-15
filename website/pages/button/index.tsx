import { x } from "@xstyled/emotion";
import { Button, Container, Typography } from "anolis-ui";
import { FC } from "react";
import Ui from "../../components/Ui";

const ButtonPage: FC = () => {
  return (
    <Ui>
      <Container>
        <x.div display="flex" flexDirection="column" spaceY="4" alignItems="flex-start">
          <Typography>
            <x.h1 color="red">
              Button
            </x.h1>
            <x.p>
              Button has 4 default variants and sizes.
            </x.p>
            <x.h2 fontSize="2xl">
              Variants
            </x.h2>
            <x.p>
              You can use 4 variants of button. Just use <x.strong>v</x.strong> prop.
            </x.p>
          </Typography>

          <x.div display="flex" spaceX="2" alignItems="center">
            <Button v="solid">Solid button</Button>

            <Button v="outline">Outline button</Button>

            <Button v="clear">Clear button</Button>

            <Button v="link">Link button</Button>
          </x.div>

          <x.h2 fontSize="2xl">
            Sizes
          </x.h2>

          <x.p>
            You can use 4 sizes of button. Just use <x.strong>s</x.strong> prop.
          </x.p>

          <x.div display="flex" spaceX="2" alignItems="center">
            <Button s="xs">XS Button</Button>

            <Button s="sm">SM Button</Button>

            <Button s="md">MD Button</Button>

            <Button s="lg">LG Button</Button>
          </x.div>

          <x.h2 fontSize="2xl">
            Disabled
          </x.h2>
          <Button disabled>Disabled Button</Button>
        </x.div>
      </Container>
    </Ui>
  );
};

export default ButtonPage;
