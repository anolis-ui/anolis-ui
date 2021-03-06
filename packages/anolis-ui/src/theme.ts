// Import components from /theme to prevent circular references in Storybook
import { CardTheme, cardTheme } from "components/Card/theme";
import { ControlTheme, controlTheme } from "components/Control/theme";
import { ModalTheme, modalTheme } from "components/Modal/theme";
import { TagTheme, tagTheme } from "components/Tag/theme";
import { typographyTheme, TypographyTheme } from "components/Typography/theme";
import { ButtonTheme, buttonTheme } from "components/Button";
import { containerTheme, ContainerTheme } from "components/Container";
import { listTheme, ListTheme } from "components/List";
import { textLinkTheme, TextLinkTheme } from "components/TextLink";
import { labelTheme, LabelTheme } from "components/Label";
import { inputTheme, InputTheme } from "components/Input";

export type AnolisTheme = {
  card: CardTheme;
  tag: TagTheme;
  typography: TypographyTheme;
  control: ControlTheme;
  modal: ModalTheme;
  button: ButtonTheme;
  container: ContainerTheme;
  list: ListTheme;
  textLink: TextLinkTheme;
  label: LabelTheme;
  input: InputTheme;
};

export const createTheme = (theme: Partial<AnolisTheme> = {}): AnolisTheme => ({
  ...cardTheme(),
  ...tagTheme(),
  ...typographyTheme(),
  ...controlTheme(),
  ...modalTheme(),
  ...buttonTheme(),
  ...containerTheme(),
  ...listTheme(),
  ...textLinkTheme(),
  ...labelTheme(),
  ...inputTheme(),
  ...theme
});

export const emptyTheme = createTheme();
