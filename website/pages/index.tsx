import { x } from "@xstyled/emotion";
import { Button, Container, TextLink, Tag, Txt, useTheme } from "anolis-ui";
import { FC, useEffect, useState } from "react";
import Ui from "components/Ui";
import Logo from "components/Logo";
import GithubIcon from "components/icons/24/github.svg";
import Link from "next/link";

type BenefitType = {
  icon: string;
  heading: string;
  text: string;
};

type ContributorType = {
  image: string;
  name: string;
};

type PhaseType = {
  name: string;
  description: string;
};

const Index: FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setOffset(window.pageYOffset));
  }, []);

  const benefits: BenefitType[] = [
    {
      icon: "📦",
      heading: "Ready out of the box",
      text: "Just install and use, Anolis is easy to setup and comes with variety of ready-to-use components."
    },
    {
      icon: "⚡",
      heading: "Blazing fast",
      text: "Just install and use, Anolis is easy to setup and comes with variety of ready-to-use components."
    },
    {
      icon: "🎨",
      heading: "Flexible and themeable",
      text: "Just install and use, Anolis is easy to setup and comes with variety of ready-to-use components."
    },
    {
      icon: "🛠️",
      heading: "Developer friendly",
      text: "Just install and use, Anolis is easy to setup and comes with variety of ready-to-use components."
    },
    {
      icon: "🌙",
      heading: "Support the dark side",
      text: "Just install and use, Anolis is easy to setup and comes with variety of ready-to-use components."
    },
    {
      icon: "📐",
      heading: "Fully responsive",
      text: "Just install and use, Anolis is easy to setup and comes with variety of ready-to-use components."
    }
  ];

  const contributors: ContributorType[] = [
    {
      image: "//placehold.it/192x192",
      name: "Name"
    },
    {
      image: "//placehold.it/192x192",
      name: "Name"
    }
  ];

  const phases: PhaseType[] = [
    {
      name: "Phase 1 – Kick off",
      description: "A wonderful serenity has taken possession of my entire soul," +
        "like these sweet mornings of spring which I enjoy with my whole heart."
    },
    {
      name: "Phase 2 – Websites",
      description: "A wonderful serenity has taken possession of my entire soul," +
        "like these sweet mornings of spring which I enjoy with my whole heart."
    },
    {
      name: "Phase 3 – Applications",
      description: "A wonderful serenity has taken possession of my entire soul," +
        "like these sweet mornings of spring which I enjoy with my whole heart."
    }
  ];

  return (
    <Ui>
      <x.div spaceY="4.5rem">
        <Container mt="1rem">
          <Logo
            fontSize={offset > 64 ? "2rem" : "4rem"}
            lineHeight={offset > 64 ? "3rem" : "6rem"}
            opacity={offset > 128 ? 0 : 1}
            position="sticky"
            top="0.5rem"
          />

          <x.h1 maxWidth="54rem" color="#061227" mt="1.5rem">
            Flexible yet strong foundation
            for your next React project.
          </x.h1>

          <Tag mt="1.5rem">
            In development
          </Tag>

          <Txt t="lead" marginTop="2rem" maxWidth="54rem" color="#444554">
            Anolis UI is a <x.strong color="#45C264">nice component library</x.strong> for React offering high flexibility and themeability,
            but <x.strong color="#0171B6">easy to setup</x.strong> with minimal config.
            <br /><br />
            <x.strong color="#061227">
              Made for building beautiful design-systems or websites.
            </x.strong>
          </Txt>

          <x.div display="flex" alignItems="center" spaceX="1.5rem" mt="2rem">
            <Link href="/docs/installation" passHref>
              <Button as="a" s="lg">
                Get started
              </Button>
            </Link>

            <Button
              as="a"
              href="https://github.com/anolis-ui/anolis-ui"
              target="_blank"
              s="lg"
              v="clear"
              leftIcon={<GithubIcon />}
            >
              Show on Github
            </Button>
          </x.div>
        </Container>

        <Container>
          <x.h2>
            Features & Benefits
          </x.h2>

          <Txt t="lead" mt="2rem">
            Anolis is currently in development. We have set 3 main phases, each with a dedicated goal of set components.
          </Txt>

          <x.div
            mt="2rem"
            display="grid"
            gap="2rem"
            gridTemplateColumns={{ _: "repeat(1, 1fr)", sm: "repeat(3, 1fr)" }}
          >
            {benefits.map((b, i) => (
              <x.div
                key={i}
                p="2rem"
                borderRadius="0.5rem"
                bg="#fff"
                boxShadow="0 0.25rem 1rem 0 rgba(6, 18, 39, 0.15)"
              >
                <x.p fontSize="4rem" lineHeight="4rem">
                  {b.icon}
                </x.p>
                <x.h3 mt="1.5rem">
                  {b.heading}
                </x.h3>
                <x.p mt="1rem">
                  {b.text}
                </x.p>
              </x.div>
            ))}
          </x.div>
        </Container>

        <Container>
          <x.h2>
            Roadmap
          </x.h2>

          <Txt t="lead" mt="2rem">
            Anolis is currently in development. We have set 3 main phases, each with a dedicated goal of set components.<br />
            Do not hesitate to{" "}
            <TextLink
              href="https://discord.gg/3QSxbtfmUb"
              target="_blank"
              v="underlined"
              fontSize="inherit"
              lineHeight="inherit"
              color="#0171B6"
            >
              join our Discord
            </TextLink>
            {" "}or{" "}
            <TextLink
              href="https://twitter.com/AnolisUI"
              target="_blank"
              v="underlined"
              fontSize="inherit"
              lineHeight="inherit"
              color="#0171B6"
            >
              follow us on Twitter
            </TextLink>
            {" "}to check up on our progress.
          </Txt>

          {phases.map((p, i) => (
            <x.div key={i} mt="3rem">
              <Tag background={i === 0 ? "#45c264" : "#888aa5"}>
                {p.name}
              </Tag>

              <x.p mt="1.5rem" maxW="40rem">
                {p.description}
              </x.p>
            </x.div>
          ))}
        </Container>

        <Container>
          <x.h2>
            Core contributors
          </x.h2>

          <Txt t="lead" mt="2rem">
            Unsung heroes, which made all of this possible –{" "}
            <x.strong color="#061227">huge thanks to each and every one of them!</x.strong>
          </Txt>

          <x.div
            display="flex"
            mt="2rem"
            spaceX="2rem"
          >
            {contributors.map((c, i) => (
              <x.div w="12rem" h="12rem" key={i} borderRadius="50%" overflow="hidden">
                <img width="192" height="192" src={c.image} loading="lazy" alt={c.name} />
              </x.div>
            )
            )}
          </x.div>
        </Container>

        <x.div background="linear-gradient(135deg, #45C264 0%, #0064B4 100%)" py="4.5rem">
          <Container>
            <x.div spaceY="2rem">
              <x.h2 color="#fff">
                Support Anolis
              </x.h2>

              <Txt t="lead" color="#fff">
                It takes a lot of time and effort to create, mantain and improve Anolis.<br />
                <x.strong>Your support and contribution to the community behind it would be much appreciated!</x.strong> 💖
              </Txt>

              <Button
                s="lg"
                as="a"
                href="mailto:team@appio.cz?subject=Anolis UI support"
                target="_blank"
              >
                Get in touch
              </Button>
            </x.div>
          </Container>
        </x.div>
      </x.div>
    </Ui>
  );
};

export default Index;
