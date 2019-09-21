import { createGlobalStyle } from "."

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.body}
  }
`

export default GlobalStyle
