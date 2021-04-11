import { x } from "@xstyled/emotion";
import { TextLink } from "anolis-ui";
import Link from "next/link";
import { FC } from "react";
import { useRouter } from "next/router";

export const Nav: FC = () => {
  const router = useRouter();

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
    >
      <NavHeader>Getting started</NavHeader>

      <x.ul>
        <NavI href="/docs/introduction" isActive={router.pathname === "/docs/introduction"}>Introduction</NavI>
        <NavI href="/docs/installation" isActive={router.pathname === "/docs/installation"}>Installation</NavI>
        <NavI href="/docs/pseudo-props" isActive={router.pathname === "/docs/pseudo-props"}>Design principles</NavI>
        <NavI href="/docs/theming" isActive={router.pathname === "/docs/theming"}>Theming</NavI>
        <NavI href="/docs/modals" isActive={router.pathname === "/docs/modals"}>Modals</NavI>
      </x.ul>

      <NavHeader>Components</NavHeader>

      <x.ul>
        <NavI href="/components/button" isActive={router.pathname === "/components/button"}>Button</NavI>
        <NavI>Dropdown</NavI>
        <NavI>Icon</NavI>
        <NavI>Link</NavI>
        <NavI href="/components/card">Card</NavI>
        <NavI>Tag</NavI>
        <NavI>Typography</NavI>
        <NavI>Image</NavI>
        <NavI>Spinner</NavI>
        <NavI>Control</NavI>
        <NavI>Input</NavI>
        <NavI>FormControl</NavI>
        <NavI>Checkbox</NavI>
        <NavI>Radio</NavI>
        <NavI>Switch</NavI>
        <NavI>Textarea</NavI>
        <NavI>Modal</NavI>
        <NavI>List</NavI>
        <NavI>Collapse</NavI>
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
        <NavI>Spacer</NavI>
      </x.ul>
    </x.nav>
  );
};

const NavHeader: FC = ({ children }) =>
  <x.h4 fontSize="lg" mt="2rem" pl="0.75rem" mb="0.625rem" fontWeight="700">{children}</x.h4>
  ;

const NavI: FC<{ href?: string; isActive?: boolean }> = ({ children, href, isActive }) => (
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
          color={isActive ? "#061227" : "#444554"}
          background={isActive ? "rgba(1, 113, 182, 0.1)" : "transparent"}
          fontWeight={isActive ? 500 : 400}
          hoverColor="#061227"
          hoverBackground="rgba(1, 113, 182, 0.1)"
        >
          {children}
        </TextLink>
      </Link>
    ) : (
      <x.p
        opacity="0.5"
        px="0.75rem"
        py="0.375rem"
      >
        {children}
      </x.p>
    )}
  </x.li>
);
