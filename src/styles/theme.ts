export const SYSTEM_FONT_STACK = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
export const VERTICAL_RHYTHM = 1.5

export const intervals = [0, 0.25, 0.5, 0.75, 1, 2, 4, 8, 16]
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
  body: 1.5,
  heading: 1.25
}

export const text = {
  heading: {
    fontFamily: "heading",
    lineHeight: "heading"
  },
  display: {
    fontFamily: "heading",
    lineHeight: "heading"
  }
}

export const radii = [".25rem"]

const inputStyles = {
  bg: "gray.0",
  borderRadius: radii[0],
  border: "none",
  appearance: "none",
  p: 2
}

export const styles = {
  root: {
    fontFamily: "body",
    lineHeight: "heading",
    bg: "gray.1",
    color: "white",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  container: {
    bg: "gray.0",
    borderRadius: radii[0]
  },
  ellipse: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  input: {
    ...inputStyles
  }
}

const buttonStyles = {
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
    borderRadius: radii[0],
    "&:hover": {
      bg: "gray.2",
      color: "white"
    }
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
