import { x } from "@xstyled/emotion";
import { Container, Icon, TextLink } from "anolis-ui";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Logo from "components/Logo";
import Footer from "components/Footer";
import GithubIcon from "components/icons/24/github.svg";

const Ui: FC = ({ children }) => {
  const router = useRouter();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setOffset(window.pageYOffset));
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <x.div
        position="sticky"
        top="0"
        bg="#fff"
        boxShadow={offset > 64 ? "0 0.25rem 1rem 0 rgba(6, 18, 39, 0.15)" : "0 0.25rem 1rem 0 transparent"}
        transition="boxShadow 300ms"
      >
        <Container
          display="flex"
          py="0.5rem"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo
            fontSize="2rem"
            lineHeight="3rem"
            opacity={offset < 128 && router.pathname === "/" ? 0 : 1}
          />

          <x.div />

          <x.div display="flex" alignItems="center">
            <TextLink>
              Read the docs
            </TextLink>

            <x.div
              display="flex"
              alignItems="center"
              h="2rem"
              pl="2rem"
              ml="2rem"
              borderLeft="1px solid rgba(136, 138, 165, 0.25)"
            >
              <TextLink href="https://github.com/anolis-ui/anolis-ui" target="_blank">
                <Icon svg={<GithubIcon />} fillHover="#24292e" />
              </TextLink>
            </x.div>
          </x.div>
        </Container>
      </x.div>

      {children}

      <Footer />
    </>
  );
};

export default Ui;
