import { x } from "@xstyled/emotion";
import { AnolisProvider, Button, Card, Container, Typography } from "anolis-ui";
import { FC } from "react";
import Ui from "components/Ui";
import Link from "next/link";

const Index: FC = () => {
  return (
    <Ui>
      <Container>
        <Typography>
          <x.h1 fontSize="3.5rem" fontWeight="600" maxWidth="54rem" color="#061227">
            Flexible yet strong foundation
            for your next React project.
          </x.h1>

          <x.p marginTop="3.5rem" maxWidth="68rem" fontSize="1.5rem" lineHeight="2.25rem" fontWeight="400" color="#444554">
            Anolis UI is a <x.strong color="#45C264">nice component library</x.strong> for React offering high flexibility and themeability,
            but <x.strong color="#0171B6">easy to setup</x.strong> with minimal config. Made for building beautiful design-systems or websites.
          </x.p>

          <x.h2 marginTop="4rem" fontSize="2rem" lineHeight="3rem" fontWeight="300" color="#888aa5">
            <x.strong fontWeight="600" color="#061227">Browse components</x.strong> (disabled are unfinished)
          </x.h2>
        </Typography>

        <x.div spaceX="6" spaceY="6" spaceXReverse>
          <Link href="/button">
            <Button s="lg" mr="6">
              Button
            </Button>
          </Link>

          <Link href="#">
            <Button s="lg" disabled>
              Dropdown menu
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Icon
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Link
            </Button>
          </Link>
          <Link href="/card">
            <Button s="lg">
              Card
            </Button>
          </Link>
          <Link href="/tag">
            <Button s="lg">
              Tag
            </Button>
          </Link>
          <Link href="/typography">
            <Button s="lg">
              Typography
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Image
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Spinner
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Close button
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Input
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Form control
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Checkbox
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Radio
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Switch
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Textarea
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Modal
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              List
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Collapse
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Toast
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Floating Box
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Tooltip
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Popover
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Tabs
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Accordion
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Lightbox
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Select2
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Avatar
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Progress
            </Button>
          </Link>
          <Link href="#">
            <Button s="lg" disabled>
              Divider
            </Button>
          </Link>
        </x.div>

      </Container>
    </Ui>
  );
};

export default Index;
