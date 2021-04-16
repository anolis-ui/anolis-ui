import { x } from "@xstyled/emotion";
import React, { FC } from "react";
import { Typography, TextLink, Container } from "anolis-ui";

const Footer: FC = () => {
  return (
    <Container>
      <x.div
        display="flex"
        justifyContent="space-between"
        flexDirection={{ _: "column", md: "row" }}
        py="1.5rem"
      >
        <x.div
          display="flex"
          alignItems="center"
        >
          <x.p>
            Powered by
          </x.p>

          <TextLink
            href="https://vercel.com?utm_source=anolis&utm_campaign=oss"
            target="_blank"
            marginLeft="0.25rem"
          >
            <x.img src="/static/img/vercel.svg" width="71" height="16" loading="lazy" alt="Vercel.com" />
          </TextLink>
        </x.div>

        <x.div
          display="flex"
          alignItems="center"
        >
          <x.p>
            Created by
          </x.p>

          <TextLink
            href="https://appio.cz"
            target="_blank"
            marginLeft="0.25rem"
          >
            <x.img src="/static/img/appio.svg" width="70" height="24" loading="lazy" alt="Appio.cz" />
          </TextLink>
        </x.div>
      </x.div>
    </Container>
  );
};

export default Footer;
