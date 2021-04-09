
import { buttonTheme, createTheme, Tag, tagTheme, textLinkTheme, typographyTheme } from "anolis-ui";

export const theme = createTheme({
  ...typographyTheme({
    baseStyle: {
      _h1: {
        fontFamily: "heading-sans"
      },
      _h2: {
        fontFamily: "heading-sans"
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
