export const SYSTEM_FONT_STACK = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`

export const breakpoints = ["40em", "52em", "60em"]

export const colors = {
  gray: [
    "#121212",
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

export const space = [0, 4, 8, 16, 32, 64, 128, 256]

export const fonts = {
  body: SYSTEM_FONT_STACK,
  heading: "inherit"
}

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64]

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
    fontFamily: fonts.heading,
    lineHeight: lineHeights.heading
  },
  display: {
    fontFamily: fonts.heading,
    lineHeight: lineHeights.heading
  }
}

export const styles = {
  root: {
    fontFamily: fonts.body,
    lineHeight: lineHeights.body
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
  styles
}
