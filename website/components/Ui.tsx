import { x } from "@xstyled/emotion";
import { Container, Icon, TextLink } from "anolis-ui";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Logo from "components/Logo";
import Footer from "components/Footer";
import GithubIcon from "components/icons/24/github.svg";
import TwitterIcon from "components/icons/24/twitter.svg";
import { Nav } from "./Nav";
import Link from "next/link";
import Discord from "components/Discord";

interface Props {
  showMenu?: boolean;
}

const Ui: FC<Props> = ({ children, showMenu }) => {
  const router = useRouter();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setOffset(window.pageYOffset));
  }, []);

  return (
    <>
      <x.header
        position="sticky"
        top="0"
        bg="#fff"
        boxShadow={router.pathname === "/" ? offset > 64
          ? "0 0.25rem 1rem 0 rgba(6, 18, 39, 0.15)" : "0 0.25rem 1rem 0 transparent" : "0 0.25rem 1rem 0 rgba(6, 18, 39, 0.15)"}
        transition="boxShadow 300ms"
        zIndex={10}
      >
        <Container
          display="flex"
          py="0.5rem"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/" passHref>
            <Logo
              {...{ as: "a" } as any}
              fontSize="2rem"
              lineHeight="3rem"
              opacity={offset < 128 && router.pathname === "/" ? 0 : 1}
              cursor="pointer"
            />
          </Link>

          <x.div display="flex" alignItems="center">
            <Link href="/docs/introduction" passHref>
              <TextLink fontFamily="heading-sans" justifyContent={{ _: "flex-end", sm: "flex-start" }}>
                Read the docs
              </TextLink>
            </Link>

            <x.div
              display="flex"
              alignItems="center"
              h="2rem"
              pl="1.5rem"
              ml="1.5rem"
              borderLeft="1px solid rgba(136, 138, 165, 0.25)"
            >
              <TextLink href="https://github.com/anolis-ui/anolis-ui" target="_blank">
                <Icon svg={<GithubIcon />} fillHover="anolis-blue-700" />
              </TextLink>

              <TextLink href="https://twitter.com/AnolisUI" target="_blank" ml="1rem">
                <Icon svg={<TwitterIcon />} fillHover="anolis-blue-700" />
              </TextLink>
            </x.div>
          </x.div>
        </Container>
      </x.header>

      {showMenu ? (
        <Container display="flex" flexGrow={1}>
          <Nav />

          <x.div
            display="flex"
            flexDirection="column"
            w="calc(100% - 20rem)"
            px="2rem"
            pt="2rem"
          >
            <x.main flexGrow={1}>
              {children}
            </x.main>

            <Discord />

            <Footer />
          </x.div>
        </Container>
      ) : (
        <>
          <x.main>
            {children}
          </x.main>

          <Footer />
        </>
      )}
    </>
  );
};

export default Ui;
