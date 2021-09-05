import { ButtonTheme, buttonTheme } from "components/Button";
import { CardTheme, cardTheme } from "components/Card";
import { CollapseTheme, collapseTheme } from "components/Collapse";
import { ContainerTheme, containerTheme } from "components/Container";
import { ControlTheme, controlTheme } from "components/Control";
import { DropMenuTheme, dropMenuTheme } from "components/DropMenu";
import { InputTheme, inputTheme } from "components/Input";
import { LabelTheme, labelTheme } from "components/Label";
import { ListTheme, listTheme } from "components/List";
import { ModalTheme, modalTheme } from "components/Modal";
import { spinnerTheme, SpinnerTheme } from "components/Spinner";
import { TagTheme, tagTheme } from "components/Tag";
import { TextLinkTheme, textLinkTheme } from "components/TextLink";
import { TypographyTheme, typographyTheme } from "components/Typography";

export type AnolisTheme = {
  button: ButtonTheme;
  card: CardTheme;
  collapse: CollapseTheme;
  container: ContainerTheme;
  control: ControlTheme;
  dropMenu: DropMenuTheme;
  input: InputTheme;
  label: LabelTheme;
  list: ListTheme;
  modal: ModalTheme;
  spinner: SpinnerTheme;
  tag: TagTheme;
  textLink: TextLinkTheme;
  typography: TypographyTheme;
};

export const createTheme = (theme: Partial<AnolisTheme> = {}): AnolisTheme => ({
  ...buttonTheme(),
  ...cardTheme(),
  ...collapseTheme(),
  ...containerTheme(),
  ...controlTheme(),
  ...dropMenuTheme(),
  ...inputTheme(),
  ...labelTheme(),
  ...listTheme(),
  ...modalTheme(),
  ...spinnerTheme(),
  ...tagTheme(),
  ...textLinkTheme(),
  ...typographyTheme(),
  ...theme
});

export const emptyTheme = createTheme();
