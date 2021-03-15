import Head from "next/head";
import { FC } from "react";
import { AnolisProvider, Button, Container } from "anolis-ui";
import { x } from "@xstyled/emotion";
import Link from "next/link";
import { useRouter } from "next/router";

const Ui: FC = ({ children }) => {
  const router = useRouter();

  return (
    <AnolisProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&display=swap" rel="stylesheet" />

        <style>
          {`
          * {
            font-family: 'Sora', sans-serif
          }
          `}
        </style>
      </Head>

      <x.div>
        <Container display="flex" paddingTop="3rem" paddingBottom="2rem" alignItems="center" justifyContent="space-between">
          <x.div
            fontSize="4rem"
            lineHeight="6rem"
            background="-webkit-linear-gradient(#eee, #333)"
            backgroundClip="text"
            display="inline-flex"
            fontWeight="500"
            style={{
              "-webkitTextFillColor": "transparent",
              "background": "linear-gradient(to right, #45C264 0%, #0171B6 100%)",
              "-webkitBackgroundClip": "text"
            } as any}
          >
            Anolis
          </x.div>

          {router.pathname === "/" ? (
            <Button
              v="clear"
              s="lg"
              as="a"
              href="https://www.notion.so/Anolis-UI-roadmap-0ce3854b4b88445983906e99908d65a7"
              target="_blank"
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
        </Container>

      </x.div>

      {children}
    </AnolisProvider>
  );
};

export default Ui;
