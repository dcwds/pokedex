import getPokeSpriteURL from "../utils/get-poke-sprite-url"

export const SYSTEM_FONT_STACK = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
export const VERTICAL_RHYTHM = 1.5

export const intervals = [0, 0.25, 0.5, 0.75, 1, 1.25, 2, 4, 8, 16]
export const breakpoints = ["40rem", "52rem", "60rem"]

export const colors = {
  gray: [
    "#1A1A1A",
    "#1E1E1E",
    "#232323",
    "#252525",
    "#272727",
    "#2C2C2C",
    "#2E2E2E",
    "#333333",
    "#363636",
    "#383838"
  ]
}

export const space = intervals.map(num => `${num * VERTICAL_RHYTHM}rem`)

export const fonts = {
  body: SYSTEM_FONT_STACK,
  heading: "inherit"
}

export const fontSizes = [
  "0.8rem", // 13px
  "1rem", // 16px
  "1.25rem", // 20px
  "1.563rem", // 25px
  "1.953rem", // 31px
  "2.441rem", // 39px
  "3.052rem" // 49px
]

export const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700,
  semiBold: 600
}

export const lineHeights = {
  body: 1.7,
  heading: 1.25
}

export const text = {
  heading: {
    fontFamily: "heading",
    lineHeight: "heading"
  },
  display: {
    fontFamily: "body",
    lineHeight: "body"
  }
}

export const radii = [".25rem"]

const inputStyles = {
  bg: "gray.0",
  borderRadius: radii[0],
  border: "none",
  appearance: "none",
  outline: "none",
  p: 2
}

const ellipseStyles = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden"
}

export const styles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    bg: "gray.1",
    color: "white",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  card: {
    bg: "gray.0",
    borderRadius: radii[0]
  },
  container: {
    maxWidth: "90rem",
    m: "0 auto",
    width: "100%"
  },
  ellipse: {
    ...ellipseStyles
  },
  input: {
    ...inputStyles
  },
  hasSprite: {
    backgroundImage: `url(${getPokeSpriteURL()})`
  },
  label: {
    color: "rgba(255,255,255, 0.3)",
    textTransform: "uppercase",
    letterSpacing: ".2rem",
    fontSize: 0
  }
}

const buttonStyles = {
  borderRadius: radii[0],
  cursor: "pointer",
  userSelect: "none",
  outline: "none",
  transition: "all 0.25s ease-in-out"
}

export const buttons = {
  listPrimary: {
    ...buttonStyles,
    color: "rgba(255,255,255,0.5)",
    bg: "gray.1",
    "&:hover": {
      bg: "gray.2",
      color: "white"
    }
  },
  selected: {
    ...buttonStyles,
    cursor: "initial",
    pointerEvents: "none",
    bg: "gray.4",
    color: "white",
    boxShadow: "0 0 1rem rgba(0,0,0, .15)"
  }
}

export default {
  breakpoints,
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  text,
  radii,
  styles,
  buttons
}
