import { defaultTheme as xdefaultTheme } from "@xstyled/emotion";

import { AnolisTheme } from "./theme";

export const legacyAnolisTheme: AnolisTheme = {
  button: {
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
  },
  card: {
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
  },
  checkbox: {
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
  },
  collapse: {
    baseStyle: {},
    sizes: {},
    variants: {},
    defaultProps: {}
  },
  container: {
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
  },
  control: {
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
  },
  dropMenu: {
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
  },
  formControl: {
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
  },
  input: {
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
  },
  label: {
    baseStyle: {},
    sizes: {},
    variants: {},
    defaultProps: {}
  },
  list: {
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
  },
  modal: {
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
  },
  spinner: {
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
  },
  switch: {
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
  },
  tag: {
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
  },
  textLink: {
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
  },
  typography: {
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
  }
};

export const legacyTheme = {
  ...xdefaultTheme,
  colors: {
    ...xdefaultTheme.colors,
    "anolis-blue": "anolis-blue-600",
    "anolis-blue-50": "#dcf6ff",
    "anolis-blue-100": "#aedeff",
    "anolis-blue-200": "#7ec6ff",
    "anolis-blue-300": "#4db0ff",
    "anolis-blue-400": "#2199fe",
    "anolis-blue-500": "#0c7fe5",
    "anolis-blue-600": "#0063b3",
    "anolis-blue-700": "#004781",
    "anolis-blue-800": "#002a50",
    "anolis-blue-900": "#000f20",
    "anolis-green-50": "#e4fce9",
    "anolis-green-100": "#c1edcc",
    "anolis-green-200": "#9de1ae",
    "anolis-green-300": "#78d38e",
    "anolis-green-400": "#52c66f",
    "anolis-green-500": "#39ad55",
    "anolis-green-600": "#2a8641",
    "anolis-green-700": "#1b602e",
    "anolis-green-800": "#0d3b19",
    "anolis-green-900": "#001502",
    "anolis-gray-50": "#f0f0fc",
    "anolis-gray-100": "#d5d5e0",
    "anolis-gray-200": "#b9b9c6",
    "anolis-gray-300": "#9c9eae",
    "anolis-gray-400": "#808296",
    "anolis-gray-500": "#67687d",
    "anolis-gray-600": "#505162",
    "anolis-gray-700": "#393a46",
    "anolis-gray-800": "#21232c",
    "anolis-gray-900": "#070c15"
  },
  fonts: {
    ...xdefaultTheme.fonts,
    // eslint-disable-next-line @typescript-eslint/quotes
    sans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
  },
  fontSizes: {
    "xs": "0.75rem",
    "sm": "0.875rem",
    "base": "1rem",
    "lg": "1.125rem",
    "xl": "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  },
  states: {
    ...xdefaultTheme.states,
    group: "[data-a-group]&",
    groupHover: "[data-group]:hover &, [data-a-group]:hover &",
    disabled: "&:disabled, &[aria-disabled=true]",
    marker: "&::marker",
    invalid: "&:user-invalid, [data-a-invalid=true] &, [data-a-invalid=true]&"
  },
  // screens: {
  // xxs: "22.5em",
  // xs: "30em",
  // sm: "48em",
  // md: "64em",
  // lg: "78em",
  // xl: "85em",
  // xxl: "94em"
  // },
  anolis: legacyAnolisTheme
};
