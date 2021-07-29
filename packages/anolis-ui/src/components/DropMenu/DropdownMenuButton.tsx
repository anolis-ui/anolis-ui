import { useComponentTheme } from "hooks/useComponentTheme";
import { anolisComponent } from "utils/anolisComponent";
import { MenuButton } from "@reach/menu-button";
import { Button, ButtonProps } from "components/Button";
import { ReactNode } from "react";
import styled, { x } from "@xstyled/emotion";

export * from "./theme";

export interface DropMenuButtonProps extends ButtonProps {
  customButton?: ReactNode;
}

export const DropMenuButton = anolisComponent<"div", DropMenuButtonProps>("div", (
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

const ButtonStyle = styled(x.div)`
  & > button {
    &:focus {
      outline: none
    }
  }
`;
