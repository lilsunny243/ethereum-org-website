export type Colors = typeof colors

const colors = {
  gray: {
    100: "#f7f7f7",
    200: "#e7e7e7",
    300: "#d4d4d4",
    400: "#b0b0b0",
    500: "#646464",
    600: "#333333",
    700: "#222222",
    900: "#141414",
  },
  blue: {
    50: "#F6F6FF",
    100: "#EBEBFF",
    200: "#D6D6FF",
    300: "#9999FF",
    400: "#5555FF",
    500: "#1C1CFF",
    600: "#0000E0",
    700: "#0000A3",
    800: "#000066",
    900: "#000029",
  },
  orange: {
    50: "#FFF3ED",
    100: "#FFE5D6",
    200: "#FFCBAD",
    300: "#FFB185",
    400: "#FF985C",
    500: "#FF7324",
    600: "#B84300",
    700: "#7A2D00",
    800: "#521E00",
    900: "#2F1000",
  },
  red: {
    100: "#f7c8c8",
    500: "#b80000",
    // ! Deprecating 900
    900: "#1B0C0C",
  },
  green: {
    100: "#ddf4e4",
    // ! Deprecating 400
    400: "#48BB78",
    500: "#0a7146",
    // ! Deprecating 900
    900: "#0A160E",
  },
  yellow: {
    200: "#fff8df",
    500: "#bd8400",
  },
}

export default colors
