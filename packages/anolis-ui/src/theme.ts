import { ButtonTheme, buttonTheme } from "components/Button/theme";
import { CardTheme, cardTheme } from "components/Card/theme";
import { CollapseTheme, collapseTheme } from "components/Collapse/theme";
import { ContainerTheme, containerTheme } from "components/Container/theme";
import { ControlTheme, controlTheme } from "components/Control/theme";
import { DropMenuTheme, dropMenuTheme } from "components/DropMenu/theme";
import { InputTheme, inputTheme } from "components/Input/theme";
import { LabelTheme, labelTheme } from "components/Label/theme";
import { ListTheme, listTheme } from "components/List/theme";
import { ModalTheme, modalTheme } from "components/Modal/theme";
import { spinnerTheme, SpinnerTheme } from "components/Spinner/theme";
import { TagTheme, tagTheme } from "components/Tag/theme";
import { TextLinkTheme, textLinkTheme } from "components/TextLink/theme";
import { TypographyTheme, typographyTheme } from "components/Typography/theme";

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
