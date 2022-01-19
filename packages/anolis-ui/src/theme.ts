import { ButtonTheme, buttonTheme } from "components/Button/theme";
import { CardTheme, cardTheme } from "components/Card/theme";
import { CheckboxTheme, checkboxTheme } from "components/Checkbox/theme";
import { CollapseTheme, collapseTheme } from "components/Collapse/theme";
import { ContainerTheme, containerTheme } from "components/Container/theme";
import { ControlTheme, controlTheme } from "components/Control/theme";
// import { DropMenuTheme, dropMenuTheme } from "components/DropMenu/theme";
import { FormControlTheme, formControlTheme } from "components/FormControl/theme";
import { InputTheme, inputTheme } from "components/Input/theme";
import { LabelTheme, labelTheme } from "components/Label/theme";
import { ListTheme, listTheme } from "components/List/theme";
import { ModalTheme, modalTheme } from "components/Modal/theme";
import { SpinnerTheme, spinnerTheme } from "components/Spinner/theme";
import { switchTheme, SwitchTheme } from "components/Switch/theme";
import { TagTheme, tagTheme } from "components/Tag/theme";
import { TextLinkTheme, textLinkTheme } from "components/TextLink/theme";
import { TypographyTheme, typographyTheme } from "components/Typography/theme";

export type AnolisTheme = {
  button: ButtonTheme;
  card: CardTheme;
  checkbox: CheckboxTheme;
  collapse: CollapseTheme;
  container: ContainerTheme;
  control: ControlTheme;
  // dropMenu: DropMenuTheme;
  formControl: FormControlTheme;
  input: InputTheme;
  label: LabelTheme;
  list: ListTheme;
  modal: ModalTheme;
  spinner: SpinnerTheme;
  switch: SwitchTheme;
  tag: TagTheme;
  textLink: TextLinkTheme;
  typography: TypographyTheme;
};

export const createTheme = (theme: Partial<AnolisTheme> = {}): AnolisTheme => ({
  ...buttonTheme(),
  ...cardTheme(),
  ...checkboxTheme(),
  ...collapseTheme(),
  ...containerTheme(),
  ...controlTheme(),
  // ...dropMenuTheme(),
  ...formControlTheme(),
  ...inputTheme(),
  ...labelTheme(),
  ...listTheme(),
  ...modalTheme(),
  ...spinnerTheme(),
  ...switchTheme(),
  ...tagTheme(),
  ...textLinkTheme(),
  ...typographyTheme(),
  ...theme
});

export const emptyTheme = createTheme();
