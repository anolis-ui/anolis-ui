import { extendTheme, PartialComponentTheme } from "utils/theme";

import type { CardTheme } from "components/Card/theme";
import type { CheckboxTheme } from "components/Checkbox/theme";
import type { ControlTheme } from "components/Control/theme";
import type { CollapseTheme } from "components/Collapse/theme";
import type { TagTheme } from "components/Tag/theme";
import type { ButtonTheme } from "components/Button/theme";
import type { ContainerTheme } from "components/Container/theme";
import type { FormControlTheme } from "components/FormControl/theme";
import type { ListTheme } from "components/List/theme";
import type { TypographyTheme } from "components/Typography/theme";
import type { TextLinkTheme } from "components/TextLink/theme";
import type { LabelTheme } from "components/Label/theme";
import type { InputTheme } from "components/Input/theme";
import type { ModalTheme } from "components/Modal/theme";
import type { DropMenuTheme } from "components/DropMenu/theme";
import type { SpinnerTheme } from "components/Spinner/theme";
import type { SwitchTheme } from "components/Switch/theme";
import type { AnolisTheme } from "../theme";

export const cardTheme = (c?: PartialComponentTheme<CardTheme>): { card: CardTheme } => ({
  card: extendTheme(emptyCard, c)
});

const emptyCard: CardTheme = {
  baseStyle: {
    display: "flex",
    w: "100%",
    position: "relative",
    flexDirection: "column",
    color: "anolis-blue-900",
    background: "white",
    maxWidth: "26rem",
    _header: {
      display: "flex",
      order: 1,
      padding: 8,
      pb: 0
    },
    _title: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: 600,
      marginBottom: "-0.75rem"
    },
    _tag: {
      position: "absolute",
      top: 0,
      right: 0,
      alignSelf: "center"
    },
    _media: {
      display: "flex",
      order: 2
    },
    _body: {
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      order: 3
    },
    _footer: {
      display: "flex",
      order: 4,
      padding: "2rem",
      paddingTop: 0,
      fontSize: "0.75rem",
      lineHeight: "1.125rem",
      color: "anolis-gray-100"
    }
  },
  sizes: {},
  variants: {
    elevated: {
      borderRadius: "3",
      boxShadow: "0 0.25rem 1rem 0 rgba(6, 18, 39, 0.15)"
    },
    outlined: {
      border: "1px solid rgba(68, 69, 84, 0.25)"
    }
  },
  defaultProps: {
    v: "elevated"
  }
};

export const buttonTheme = (t?: PartialComponentTheme<ButtonTheme>): { button: ButtonTheme } => ({
  button: extendTheme(emptyButton, t)
});

const emptyButton: ButtonTheme = {
  baseStyle: {
    fontWeight: 500,
    fontSize: "base",
    lineHeight: 5,
    borderRadius: "3",
    display: "inline-flex",
    bg: "transparent",
    border: "1px solid transparent",
    transition: "background 300ms, color 300ms, border 300ms, box-shadow 300ms",
    textDecoration: "none",
    alignItems: "center",
    justifyContent: "center",
    cursor: { _: "pointer", disabled: "not-allowed" },
    _leftIcon: {
      marginLeft: 0,
      marginRight: "1rem"
    },
    _rightIcon: {
      marginRight: 0,
      marginLeft: "1rem"
    },
    _spinner: {
      s: "md"
    }
  },
  sizes: {
    xs: {
      py: "0.25rem",
      px: "0.5rem",
      fontSize: "xs",
      lineHeight: "1rem",
      _spinner: {
        s: "xs"
      }
    },
    sm: {
      px: "0.75rem",
      py: "0.25rem",
      fontSize: "sm",
      lineHeight: "1.5rem",
      _spinner: {
        s: "sm"
      }
    },
    md: {
      px: "2rem",
      py: "0.5rem",
      fontSize: "base",
      lineHeight: "1.5rem"
    },
    lg: {
      px: "8",
      py: "3",
      fontSize: "lg",
      lineHeight: "1.875rem",
      _spinner: {
        s: "lg"
      }
    }
  },
  variants: {
    solid: {
      bg: { _: "anolis-blue-600", hover: "anolis-blue-700", active: "anolis-blue-800", focus: "anolis-blue-700" },
      color: "#fff",
      boxShadow: { focus: "inset 0px 0px 0 2px rgba(15, 31, 40, 0.2)" },
      outline: { focus: "none" },
      opacity: { disabled: 0.5 }
    },
    outline: {
      border: "1px solid",
      borderColor: "anolis-blue-600",
      color: { _: "anolis-blue-600", hover: "anolis-blue-700", active: "anolis-blue-800", focus: "anolis-blue-800" } as any,
      bg: { hover: "anolis-blue-50", active: "anolis-blue-100", focus: "anolis-blue-50" },
      boxShadow: { focus: "inset 0px 0px 0 2px rgba(15, 31, 40, 0.2)" },
      outline: { focus: "none" },
      opacity: { disabled: 0.5 }
    },
    clear: {
      color: { _: "anolis-blue-600", hover: "anolis-blue-700", active: "anolis-blue-800", focus: "anolis-blue-800" } as any,
      bg: { hover: "anolis-blue-50", active: "anolis-blue-100", focus: "anolis-blue-50" },
      boxShadow: { focus: "inset 0px 0px 0 2px rgba(15, 31, 40, 0.2)" },
      outline: { focus: "none" },
      opacity: { disabled: 0.5 }
    },
    link: {
      padding: 0,
      color: { _: "anolis-blue-600", hover: "anolis-blue-700", active: "anolis-blue-800", focus: "anolis-blue-800" } as any,
      borderRadius: 0,
      border: 0,
      borderBottom: { _: "1px solid transparent", hover: "1px solid anolis-blue-600" },
      boxShadow: { focus: "inset 0px 0px 0 2px rgba(15, 31, 40, 0.2)" },
      outline: { focus: "none" },
      opacity: { disabled: 0.5 }
    }
  },
  defaultProps: {
    v: "solid",
    s: "md"
  }
};

export const checkboxTheme = (t?: PartialComponentTheme<CheckboxTheme>): { checkbox: CheckboxTheme } => ({
  checkbox: extendTheme(emptyCheckbox, t)
});

const emptyCheckbox: CheckboxTheme = {
  baseStyle: {
    transition: "border 300ms, background 300ms",
    color: { _: "anolis-gray-400", hover: "anolis-gray-500", focusWithin: "anolis-gray-600" } as any,
    display: "flex",
    alignItems: "center",
    fontFamily: "sans",
    _control: {
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none"
    },
    _controlFocusRing: {
      borderWidth: 2,
      borderColor: "anolis-gray-600"
    },
    _icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    _label: {
      userSelect: "none"
    }
  },
  variants: {
    outline: {
      _control: {
        borderRadius: "3",
        border: "1px solid",
        borderColor: { _: "anolis-gray-200", hover: "anolis-gray-300", focusWithin: "anolis-gray-400", groupHover: "anolis-gray-300" }
      }
    }
  },
  sizes: {
    sm: {
      _control: {
        borderRadius: "3",
        border: "1px solid",
        borderColor: { _: "anolis-gray-200", hover: "anolis-gray-300", focusWithin: "anolis-gray-400", groupHover: "anolis-gray-300" },
        w: "0.75rem",
        h: "0.75rem",
        mr: "0.75rem"
      },
      _controlActive: {
        bg: "anolis-blue-500"
      }
    },
    md: {
      _control: {
        borderRadius: "3",
        border: "1px solid",
        borderColor: { _: "anolis-gray-200", hover: "anolis-gray-300", focusWithin: "anolis-gray-400", groupHover: "anolis-gray-300" },
        w: "1rem",
        h: "1rem",
        mr: "1rem"
      },
      _controlActive: {
        bg: "anolis-blue-500"
      }
    },
    lg: {
      _control: {
        borderRadius: "3",
        border: "1px solid",
        borderColor: { _: "anolis-gray-200", hover: "anolis-gray-300", focusWithin: "anolis-gray-400", groupHover: "anolis-gray-300" },
        w: "1.25rem",
        h: "1.25rem",
        mr: "1.25rem"
      },
      _controlActive: {
        bg: "anolis-blue-500"
      }
    }
  },
  defaultProps: {
    v: "outline",
    s: "md"
  }
};

export const collapseTheme = (c?: PartialComponentTheme<CollapseTheme>): { collapse: CollapseTheme } => ({
  collapse: extendTheme(emptyCollapse, c)
});

const emptyCollapse: CollapseTheme = {
  baseStyle: {},
  sizes: {},
  variants: {},
  defaultProps: {}
};

export const containerTheme = (t?: PartialComponentTheme<ContainerTheme>): { container: ContainerTheme } => ({
  container: extendTheme(emptyContainer, t)
});

const emptyContainer: ContainerTheme = {
  baseStyle: {
    ml: "auto",
    mr: "auto"
  },
  sizes: {},
  variants: {
    normal: {
      w: "100%",
      maxWidth: { "_": "100%", "xxs": "100%", "xs": "100%", "sm": "32em", "md": "40em", "lg": "56em", "xl": "64em", "2xl": "84em" },
      px: { _: 6, sm: 4 }
    },
    fluid: {
      w: "100%",
      px: { _: 6, sm: 4 }
    }
  },
  defaultProps: {
    v: "normal"
  }
};

export const controlTheme = (c?: PartialComponentTheme<ControlTheme>): { control: ControlTheme } => ({
  control: extendTheme(emptyControl, c)
});

const emptyControl: ControlTheme = {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    role: "group",
    w: "100%",
    position: "relative",
    flexDirection: "column",
    color: "text",
    background: "white",
    maxWidth: "30rem"
  },
  sizes: {
    xs: {},
    sm: {},
    md: {},
    lg: {}
  },
  variants: {},
  defaultProps: {
    s: "md"
  }
};

export const dropMenuTheme = (t?: PartialComponentTheme<DropMenuTheme>): { dropMenu: DropMenuTheme } => ({
  dropMenu: extendTheme(emptyDropMenu, t)
});

const emptyDropMenu: DropMenuTheme = {
  baseStyle: {
    _button: {},
    _item: {
      px: "1rem",
      py: "0.5rem",
      bg: { _: "#fff", hover: "anolis-gray-50" },
      transition: "background 300ms",
      maxWidth: "100%",
      cursor: "pointer"
    },
    _list: {
      mt: "0.5rem",
      py: "0.5rem",
      borderRadius: "3",
      bg: "#fff",
      boxShadow: "0 0.125rem 0.5rem 0 rgba(6, 18, 39, 0.15)",
      w: "16rem"
    }
  },
  sizes: {
  },
  variants: {
  },
  defaultProps: {
  }
};

export const formControlTheme = (t?: PartialComponentTheme<FormControlTheme>): { formControl: FormControlTheme } => ({
  formControl: extendTheme(emptyFormControl, t)
});

const emptyFormControl: FormControlTheme = {
  baseStyle: {
    color: { invalid: "red-600" },
    spaceY: 1,
    _label: {
      fontWeight: "semibold"
    },
    _help: {
      fontSize: "sm"
    },
    _error: {
      fontSize: "sm"
    }
  },
  sizes: {},
  variants: {},
  defaultProps: {}
};

export const inputTheme = (t?: PartialComponentTheme<InputTheme>): { input: InputTheme } => ({
  input: extendTheme(emptyInput, t)
});

const emptyInput: InputTheme = {
  baseStyle: {
    transition: "border 300ms, background 300ms",
    color: {
      _: "anolis-gray-400",
      hover: "anolis-gray-500",
      focusWithin: "anolis-gray-600",
      invalid: "red-600"
    } as any,
    display: "flex",
    alignItems: "center",

    _leftIcon: {
      mr: "1rem"
    },
    _rightIcon: {
      ml: "1rem"
    }
  },
  sizes: {
    xs: {
      px: "0.5rem",
      fontSize: "xs",
      lineHeight: "1rem"
    },
    sm: {
      px: "0.75rem",
      py: "0.25rem",
      fontSize: "sm",
      lineHeight: "1.5rem"
    },
    md: {
      px: "1rem",
      py: "0.5rem",
      fontSize: "base",
      lineHeight: "1.5rem"
    },
    lg: {
      px: "1rem",
      py: "3",
      fontSize: "lg",
      lineHeight: "1.875rem"
    }
  },
  variants: {
    outline: {
      borderRadius: "3",
      border: "1px solid",
      borderColor: {
        _: "anolis-gray-200",
        hover: "anolis-gray-300",
        focusWithin: "anolis-gray-400",
        invalid: "red-600"
      }
    },
    line: {
      borderBottom: "2px solid",
      borderColor: {
        _: "anolis-gray-400",
        hover: "anolis-gray-500",
        focusWithinBorder: "anolis-gray-600",
        invalid: "red-600"
      }
    },
    fill: {
      borderRadius: "3",
      border: "1px solid",
      borderColor: {
        _: "anolis-gray-50",
        hover: "anolis-gray-100",
        focusWithinBorder: "anolis-gray-400",
        invalid: "red-600"
      },
      bg: {
        _: "anolis-gray-50",
        hover: "anolis-gray-100",
        focusWithin: "#fff",
        invalid: "red-100"
      }
    },
    unstyled: {
      padding: 0
    }
  },
  defaultProps: {
    v: "outline",
    s: "md"
  }
};

export const labelTheme = (t?: PartialComponentTheme<LabelTheme>): { label: LabelTheme } => ({
  label: extendTheme(emptyLabel, t)
});

const emptyLabel: LabelTheme = {
  baseStyle: {
  },
  sizes: {
  },
  variants: {
  },
  defaultProps: {
  }
};

export const listTheme = (t?: PartialComponentTheme<ListTheme>): { list: ListTheme } => ({
  list: extendTheme(emptyList, t)
});

const emptyList: ListTheme = {
  baseStyle: {
    lineHeight: "6",
    margin: 0,
    padding: 0,
    color: "anolis-blue-900",
    _bullet: {
      content: '"\\2022"',
      color: "anolis-blue-900",
      marginRight: "0.8rem"
    }
  },
  sizes: {},
  variants: {
    ordered: {
      listStyleType: "decimal"
    },
    unordered: {
      listStyleType: "disc"
    }
  },
  defaultProps: {
    v: "unordered"
  }
};

export const modalTheme = (c?: PartialComponentTheme<ModalTheme>): {modal: ModalTheme} => ({ modal: extendTheme(emptyModal, c) });

const emptyModal: ModalTheme = {
  baseStyle: {
    flexDirection: "column",
    position: "relative",
    bg: "#fff",
    borderRadius: "0.3rem",
    padding: "3rem",
    overflow: "scroll",
    maxHeight: "100%",
    _overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      w: "100%",
      h: "100%",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 3,
      background: "rgba(15, 31, 40, 0.5)"
    },
    _header: {
      fontSize: "2rem",
      lineHeight: "3rem",
      fontFamily: "rubik"
    },
    _close: {
      position: "absolute",
      top: "1rem",
      right: "1rem"
    }
  },
  variants: {},
  sizes: {
    sm: {
      maxWidth: "41rem"
    },
    md: {
      maxWidth: "63rem"
    },
    lg: {
      maxWidth: "85rem"
    },
    full: {
      maxWidth: "none"
    }
  },
  defaultProps: {
    s: "md"
  }
};

export const switchTheme = (t?: PartialComponentTheme<SwitchTheme>): { switch: SwitchTheme } => ({
  switch: extendTheme(emptySwitch, t)
});

const emptySwitch: SwitchTheme = {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    spaceX: 2,
    opacity: { disabled: 0.3 },
    pointerEvents: { disabled: "none" },
    _control: {
      transition: "background 200ms, color 200ms, border 200ms",
      bg: {
        _: "anolis-gray-200",
        groupHover: "anolis-gray-300",
        active: "anolis-gray-400",
        focus: "anolis-gray-300"
      },
      color: {
        _: "anolis-gray-200",
        groupHover: "anolis-gray-300",
        active: "anolis-gray-400",
        focus: "anolis-gray-300"
      },
      borderWidth: 3,
      borderColor: {
        _: "anolis-gray-200",
        groupHover: "anolis-gray-300",
        active: "anolis-gray-400",
        focus: "anolis-gray-300",
        disabled: "anolis-gray-100"
      },
      borderRadius: "full",
      position: "relative"
    },
    _controlActive: {
      bg: {
        _: "anolis-blue-600",
        groupHover: "anolis-blue-700",
        active: "anolis-blue-800",
        focus: "anolis-blue-700"
      },
      color: {
        _: "anolis-blue-600",
        groupHover: "anolis-blue-700",
        active: "anolis-blue-800",
        focus: "anolis-blue-700"
      },
      borderColor: {
        _: "anolis-blue-600",
        groupHover: "anolis-blue-700",
        active: "anolis-blue-800",
        focus: "anolis-blue-700"
      }
    },
    _controlFocusRing: {
      boxShadow: "xl"
    },
    _knob: {
      transition: "margin 200ms",
      w: 4,
      h: 4,
      borderRadius: "full",
      bg: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    _knobActive: {
      mr: 0
    },
    _label: {
      userSelect: "none"
    }
  },
  variants: {},
  sizes: {
    sm: {
      _knob: {
        w: 3,
        h: 3,
        mr: 4
      },
      _knobActive: {
        ml: 4
      }
    },
    md: {
      _knob: {
        w: 4,
        h: 4,
        mr: 5
      },
      _knobActive: {
        ml: 5
      }
    },
    lg: {
      _knob: {
        w: 5,
        h: 5,
        mr: 6
      },
      _knobActive: {
        ml: 6
      }
    }
  },
  defaultProps: {
    s: "md"
  }
};

export const spinnerTheme = (t?: PartialComponentTheme<SpinnerTheme>): { spinner: SpinnerTheme } => ({
  spinner: extendTheme(emptySpinner, t)
});

const emptySpinner: SpinnerTheme = {
  baseStyle: {
    animation: "spin",
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "full",
    borderWidth: "2px",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  },
  sizes: {
    xs: {
      w: 3,
      h: 3
    },
    sm: {
      w: 4,
      h: 4
    },
    md: {
      w: 6,
      h: 6
    },
    lg: {
      w: 8,
      h: 8
    },
    xl: {
      w: 12,
      h: 12
    }
  },
  variants: {},
  defaultProps: {
    s: "md"
  }
};

export const tagTheme = (t?: PartialComponentTheme<TagTheme>): { tag: TagTheme } => ({
  tag: extendTheme(emptyTag, t)
});

const emptyTag: TagTheme = {
  baseStyle: {
    display: "inline-flex",
    whiteSpace: "nowrap",
    alignItems: "center",
    userSelect: "none",
    transition: "color 300ms, background 300ms, border-color 300ms",
    borderRadius: "0.3rem",
    border: "1px solid",
    borderColor: "anolis-gray-400",
    px: "3",
    fontSize: "sm",
    fontWeight: 500,
    lineHeight: "relaxed",
    _leftIcon: {
      marginLeft: 0,
      marginRight: "0.5rem"
    },
    _rightIcon: {
      marginRight: 0,
      marginLeft: "0.5rem"
    }
  },
  sizes: {},
  variants: {
    solid: {
      bg: "anolis-gray-400",
      color: "white"
    },
    outline: {
      color: "anolis-gray-400"
    },
    clear: {
      borderColor: "transparent",
      color: "anolis-gray-400"
    }
  },
  defaultProps: {
    v: "solid"
  }
};

export const textLinkTheme = (t?: PartialComponentTheme<TextLinkTheme>): { textLink: TextLinkTheme } => ({
  textLink: extendTheme(emptyTextLink, t)
});

const emptyTextLink: TextLinkTheme = {
  baseStyle: {
    color: { _: "anolis-blue-600", hover: "anolis-blue-700" } as any,
    borderBottom: "1px solid transparent",
    fontSize: "1rem",
    lineHeight: "initial",
    display: "inline-flex",
    alignItems: "center",
    transition: "color 300ms, border 300ms",
    cursor: "pointer",
    textDecoration: "none",
    _leftIcon: {
      marginLeft: 0,
      marginRight: "1rem"
    },
    _rightIcon: {
      marginRight: 0,
      marginLeft: "1rem"
    }
  },
  sizes: {
  },
  variants: {
    normal: {
    },
    underlined: {
      borderBottom: { _: "1px solid", hover: "1px solid" },
      borderColor: { _: "anolis-blue-700", hover: "transparent" }
    }
  },
  defaultProps: {
    v: "normal"
  }
};

export const typographyTheme = (c?: PartialComponentTheme<TypographyTheme>): { typography: TypographyTheme } => ({
  typography: extendTheme(emptyTypography, c)
});

const emptyTypography: TypographyTheme = {
  baseStyle: {
    _h1: {
      fontSize: { _: "2.5rem", sm: "3rem" },
      fontWeight: 500,
      lineHeight: { _: "3rem", sm: "3.6rem" },
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
      lineHeight: "3rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h3: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: "2.4rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: "1.8rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: "1.5rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _h6: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: "1.2rem",
      color: "anolis-blue-900",
      fontFamily: "sans"
    },
    _p: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      color: "anolis-gray-700",
      fontFamily: "sans"
    },
    _lead: {
      fontSize: "1.5rem",
      lineHeight: "2.25rem",
      fontFamily: "sans"
    }
  },
  sizes: {},
  variants: {
    prose: {

    }
  },
  defaultProps: {}
};

export const createTheme = (theme: Partial<AnolisTheme> = {}): AnolisTheme => ({
  ...buttonTheme(),
  ...cardTheme(),
  ...checkboxTheme(),
  ...collapseTheme(),
  ...containerTheme(),
  ...controlTheme(),
  ...dropMenuTheme(),
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
