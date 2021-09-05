import { MenuButton } from "@reach/menu-button";
import styled, { x } from "@xstyled/emotion";
import { Button, ButtonProps } from "components/Button";
import { useComponentTheme } from "hooks/useComponentTheme";
import { ReactNode } from "react";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";

export * from "./theme";

export type DropMenuButtonProps = AnolisComponentProps<"button", ButtonProps & {
  customButton?: ReactNode;
}>;

export const DropMenuButton = anolisComponent<"button", DropMenuButtonProps>("button", (
  {
    children,
    v,
    customButton,
    ...p
  }, ref) => {
  const theme = useComponentTheme("dropMenu", v);

  return (
    <ButtonStyle>
      <MenuButton>
        {customButton || (
          <Button as="span" ref={ref as any} {...theme._button} {...p}>
            {children}
          </Button>
        )}
      </MenuButton>
    </ButtonStyle>
  );
});

DropMenuButton.displayName = "DropMenuButton";

const ButtonStyle = styled(x.div)`
  & > button {
    padding: 0;

    &:focus {
      outline: none
    }
  }
`;
