import { mode } from "@chakra-ui/theme-tools"

const styles = {
  global: (props) => ({
    /**
     * THESE ARE OLD GLOBAL STYLES - carried over from old css files
     *
     * They are needed just to keep style consistency as we transition out of
     * the old styled components to Chakra.
     *
     * TODO: remove these overrides as we adopt the new Design System and we
     * don't need the global styles anymore
     */
    body: {
      // TODO: when we have Chakra v2, this should be done by overriding the
      // native Chakra semantic tokens
      bg: mode("white", "gray.700")(props),
      lineHeight: "base",
      fontSize: ["sm", null, "md"],
    },
    a: {
      color: "primary.base",
      textDecoration: "underline",
    },
    // should be replace with https://chakra-ui.com/docs/components/list
    "ul, ol": {
      margin: "0px 0px 1.45rem 1.45rem",
      padding: 0,
    },
    // imported global CSS styles for list items
    li: {
      marginBottom: "calc(1.45rem / 2)",
    },
    "ol li": {
      paddingInlineStart: "0",
    },
    "ul li": {
      paddingInlineStart: "0",
    },
    "li > ol": {
      marginInlineStart: "1.45rem",
      marginBottom: "calc(1.45rem / 2)",
      marginTop: "calc(1.45rem / 2)",
    },
    "li > ul": {
      marginInlineStart: "1.45rem",
      marginBottom: "calc(1.45rem / 2)",
      marginTop: "calc(1.45rem / 2)",
    },

    "li *:last-child": {
      marginBottom: "0",
    },
    "li > p": {
      marginBottom: "calc(1.45rem / 2)",
    },
    // Anchor tag styles
    // Selected specifically for mdx rendered side icon link
    ".header-anchor": {
      position: "relative !important",
      display: "initial",
      marginLeft: "-1.5em",
      paddingRight: "0.5rem !important",
      fontSize: "1rem",
      verticalAlign: "middle",

      svg: {
        display: "inline",
        fill: "primary.base",
        visibility: "hidden",
      },
    },
    "h1:hover,h2:hover,h3:hover,h4:hover,h5:hover,h6:hover": {
      ".header-anchor svg": {
        visibility: "visible",
      },
    },
    ".header-anchor:focus svg": {
      visibility: "visible",
    },
    "pre, code, kbd, samp": {
      fontSize: "0.8em",
      lineHeight: "1.1rem",
      fontFamily: "SFMono-Regular,Menlo,Monaco,Consolas,monospace",
    },
  }),
}

export default styles
