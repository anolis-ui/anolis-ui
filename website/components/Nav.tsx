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
      <x.ul>
        <NavI href="/docs/installation">Installation</NavI>
        <NavI href="/docs/triplet-props">Triplet props</NavI>
        <NavI href="/docs/modals">Modals</NavI>
        <NavI href="/docs/anolis-provider">Anolis Provider</NavI>
        <NavI href="/docs/typescript">Typescript</NavI>
      </x.ul>

      <NavHeader>Theming</NavHeader>

      <x.ul>
        <NavI href="/theme/basic">Basic theme</NavI>
        <NavI href="/theme/customizing">Customizing theme</NavI>
        <NavI href="/theme/structure">Theme structure</NavI>
      </x.ul>

      <NavHeader>Components</NavHeader>

      <x.ul>
        <NavI href="/components/button">Button</NavI>
        <NavI href="/components/card">Card</NavI>
        <NavI>Checkbox</NavI>
        <NavI>Collapse</NavI>
        <NavI>Control</NavI>
        <NavI>FormControl</NavI>
        <NavI>Icon</NavI>
        <NavI>Image</NavI>
        <NavI>Input</NavI>
        <NavI>List & ListItem</NavI>
        <NavI>Modal</NavI>
        <NavI>Radio</NavI>
        <NavI>Spinner</NavI>
        <NavI>Tag</NavI>
        <NavI>Textarea</NavI>
        <NavI>TextLink</NavI>
        <NavI>Typography</NavI>
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
          fontSize="0.875rem"
          lineHeight="1.25rem"
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
