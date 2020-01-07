import React, { FC, Fragment } from "react"
import { Box } from "rebass"

import { Provider } from "react-redux"
import store from "../../store"

import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import theme from "../../styles/theme"

import Header from "../header"
import PokePicker from "../poke-picker"

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Global
            styles={css`
              html,
              body {
                font-size: 100%;
                height: 100vh;
                margin: 0;
                min-height: 100vh;
              }
            `}
          />
          <Box variant="styles.root">
            <Header />
            <Box as="main" sx={{ p: 4 }}>
              <PokePicker />
            </Box>
          </Box>
        </Fragment>
      </ThemeProvider>
    </Provider>
  )
}

export default App
