import { x } from "@xstyled/emotion";
import { TextLink } from "anolis-ui";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { useRouter } from "next/router";

export const Nav: FC = () => {
  return (
    <x.nav
      minWidth="20rem"
      flex="0 0 auto"
      position="sticky"
      maxH="calc(100vh - 4rem)"
      top="4rem"
      overflowY="auto"
      ml="-0.75rem"
      pb="2rem"
      pr="2rem"
      pt="2rem"
    >
      <x.ul>
        <NavI href="/docs/installation">Installation</NavI>
        {/*
        <NavI href="/docs/triplet-props">Triplet props</NavI>
        <NavI href="/docs/modals">Modals</NavI>
        <NavI href="/docs/anolis-provider">Anolis Provider</NavI>
        <NavI href="/docs/typescript">Typescript</NavI>
        */}
      </x.ul>

      {/*
      <NavHeader>Theming</NavHeader>

      <x.ul>
        <NavI href="/theme/basic">Basic theme</NavI>
        <NavI href="/theme/customizing">Customizing theme</NavI>
        <NavI href="/theme/structure">Theme structure</NavI>
      </x.ul>
      */}

      <NavHeader>Components</NavHeader>

      <x.ul>
        <NavI href="/components/button">Button</NavI>
        <NavI href="/components/card">Card</NavI>
        <NavI href="/components/container">Container</NavI>
        <NavI>Checkbox</NavI>
        <NavI>Collapse</NavI>
        <NavI>Control</NavI>
        <NavI>FormControl</NavI>
        <NavI href="/components/icon">Icon</NavI>
        <NavI>Image</NavI>
        <NavI>Input</NavI>
        <NavI href="/components/list">List & ListItem</NavI>
        <NavI>Modal</NavI>
        <NavI>Radio</NavI>
        <NavI>Spinner</NavI>
        <NavI href="/components/tag">Tag</NavI>
        <NavI>Textarea</NavI>
        <NavI href="/components/textlink">TextLink</NavI>
        <NavI href="/components/typography">Typography</NavI>
      </x.ul>

      <NavHeader>Coming soon</NavHeader>

      <x.ul>
        <NavI>Dropdown</NavI>
        <NavI>Switch</NavI>
        <NavI>Toast</NavI>
        <NavI>FloatingBox</NavI>
        <NavI>Tooltip</NavI>
        <NavI>Popover</NavI>
        <NavI>Tabs</NavI>
        <NavI>Accordion</NavI>
        <NavI>Lightbox</NavI>
        <NavI>Select</NavI>
        <NavI>Avatar</NavI>
        <NavI>Progress</NavI>
        <NavI>Divider</NavI>
      </x.ul>
    </x.nav>
  );
};

const NavHeader: FC<{ children: ReactNode }> = ({ children }) =>
  <x.h4 fontSize="lg" mt="2rem" pl="0.75rem" mb="0.625rem" fontWeight="700">{children}</x.h4>
  ;

const NavI: FC<{ href?: string; children: ReactNode }> = ({ children, href }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <x.li lineHeight="loose">
      {href ? (
        <Link href={href} passHref>
          <TextLink
            px="0.75rem"
            py="0.375rem"
            w="100%"
            h="100%"
            borderRadius="0.25rem"
            transition="background 300ms, color 300ms"
            color={isActive ? "anolis-blue-900" : { _: "#444554", hover: "#061227" } as any}
            bg={isActive ? "anolis-blue-50" : { _: "transparent", hover: "anolis-blue-50" }}
            fontWeight={isActive ? 500 : 400}
            fontSize="0.875rem"
            lineHeight="1.25rem"
            borderBottom="0"
          >
            {children}
          </TextLink>
        </Link>
      ) : (
        <x.p
          opacity="0.5"
          px="0.75rem"
          py="0.375rem"
          fontSize="0.875rem"
          lineHeight="1.25rem"
        >
          {children}
        </x.p>
      )}
    </x.li>
  );
};
