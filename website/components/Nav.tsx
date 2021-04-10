import { x } from "@xstyled/emotion";
import { TextLink } from "anolis-ui";
import Link from "next/link";
import { FC } from "react";

export const Nav: FC = () => {
  return (
    <x.nav minWidth="20rem" flex="0 0 auto">
      <NavHeader>Getting started</NavHeader>

      <x.ul pl="1">
        <NavI href="/introduction">Introduction</NavI>
        <NavI href="/installation">Installation</NavI>
        <NavI href="/pseudo-props">Design principles</NavI>
        <NavI href="/theming">Theming</NavI>
        <NavI href="/modals">Modals</NavI>
      </x.ul>

      <NavHeader>Components</NavHeader>

      <x.ul pl="1">
        <NavI href="/components/button">Button</NavI>
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

const NavHeader: FC = ({ children }) => <x.h4 fontSize="lg" mt="4" mb="2">{children}</x.h4>;
const NavI: FC<{ href?: string }> = ({ children, href }) => (
  <x.li lineHeight="loose">
    {href ? (
      <Link href={href} passHref>
        <TextLink>
          {children}
        </TextLink>
      </Link>
    ) : <>{children}</>}
  </x.li>
);
