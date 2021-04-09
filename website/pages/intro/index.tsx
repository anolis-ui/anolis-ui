import { NextPage } from "next";
import { Button, Container } from "anolis-ui";
import { x } from "@xstyled/emotion";
import Link from "next/link";
import Ui from "components/Ui";
import { useRouter } from "next/router";

const Intro: NextPage = () => {
  const router = useRouter();

  return (
    <Ui>
      <Container>
        {router.pathname === "/" ? (
          <Button
            v="clear"
            s="lg"
            as="a"
            {...{ href: "https://www.notion.so/Anolis-UI-roadmap-0ce3854b4b88445983906e99908d65a7" }}
            {...{ target: "_blank" }}
          >
            Roadmap ⟶
          </Button>
        ) : (
          <Link href="/">
            <Button
              v="clear"
              s="lg"
              as="a"
            >
              ⟵ Back
            </Button>
          </Link>
        )}

        <x.h2 marginTop="4rem" fontSize="2rem" lineHeight="3rem" fontWeight="300" color="#888aa5">
          <x.strong fontWeight="600" color="#061227">Browse components</x.strong> (disabled are unfinished)
        </x.h2>

        <x.div spaceX="6" spaceY="6" spaceXReverse>
          <Link href="/button" passHref>
            <Button as="a" s="lg" mr="6">
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
  )
};

export default Intro;
