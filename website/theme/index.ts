
import { buttonTheme, createTheme, Tag, tagTheme, textLinkTheme, typographyTheme } from "anolis-ui";

export const theme = createTheme({
  ...typographyTheme({
    baseStyle: {
      _h1: {
        fontFamily: "heading-sans",
        fontSize: "3xl"
      },
      _h2: {
        fontFamily: "heading-sans",
        fontSize: "2xl",
        paddingTop: "2",
        ...{ paddingBottom: "4" } as any
      },
      _h3: {
        fontFamily: "heading-sans"
      },
      _h4: {
        fontFamily: "heading-sans"
      },
      _h5: {
        fontFamily: "heading-sans"
      },
      _h6: {
        fontFamily: "heading-sans"
      },
      _p: {
        ...{ paddingBottom: "3" } as any
      }
    }
  }),
  ...tagTheme({
    baseStyle: {
      background: "#45C264",
      border: 0,
      py: "0.25rem",
      px: "0.75rem",
      fontSize: "1rem"
    }
  }),
  ...buttonTheme({
    variants: {
      clear: {
        color: "#888AA5"
      }
    }
  }),
  ...textLinkTheme({
    baseStyle: {
      color: "#888aa5"
    }
  })
});
