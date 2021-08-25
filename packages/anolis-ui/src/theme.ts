import { ButtonTheme, buttonTheme } from "components/Button";
import { CardTheme, cardTheme } from "components/Card";
import { collapseTheme, CollapseTheme } from "components/Collapse";
import { ContainerTheme, containerTheme } from "components/Container";
import { ControlTheme, controlTheme } from "components/Control";
import { DropMenuTheme, dropMenuTheme } from "components/DropMenu";
import { InputTheme, inputTheme } from "components/Input";
import { LabelTheme, labelTheme } from "components/Label";
import { ListTheme, listTheme } from "components/List";
import { ModalTheme, modalTheme } from "components/Modal";
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
  ...tagTheme(),
  ...textLinkTheme(),
  ...typographyTheme(),
  ...theme
});

export const emptyTheme = createTheme();
