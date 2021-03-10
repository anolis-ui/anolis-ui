// Import components from /theme to prevent circular references in Storybook
import { CardTheme, cardTheme } from "components/Card/theme";
import { ControlTheme, controlTheme } from "components/Control/theme";
import { ModalTheme, modalTheme } from "components/Modal/theme";
import { TagTheme, tagTheme } from "components/Tag/theme";
import { typographyTheme, TypographyTheme } from "components/Typography/theme";
import { ButtonTheme, buttonTheme } from "components/Button";
import { containerTheme, ContainerTheme } from "components/Container";

export type AnolisTheme = {
  card: CardTheme;
  tag: TagTheme;
  typography: TypographyTheme;
  control: ControlTheme;
  modal: ModalTheme;
  button: ButtonTheme;
  container: ContainerTheme;
};

export const createTheme = (theme: Partial<AnolisTheme> = {}): AnolisTheme => ({
  ...cardTheme(),
  ...tagTheme(),
  ...typographyTheme(),
  ...controlTheme(),
  ...modalTheme(),
  ...buttonTheme(),
  ...containerTheme(),
  ...theme
});

export const emptyTheme = createTheme();
