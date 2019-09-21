import * as styledComponents from "styled-components"
import { ThemedStyledComponentsModule } from "styled-components"

import theme from "./theme"

export type Theme = typeof theme

// We re-export `styled-components` in order to have a strongly-typed `theme`.
const {
  default: styled,
  css,
  createGlobalStyle,
  ThemeProvider,
  ThemeConsumer
} = (styledComponents as any) as ThemedStyledComponentsModule<Theme>

export { css, createGlobalStyle, ThemeProvider, ThemeConsumer }
export default { styled }
