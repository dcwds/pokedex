import React, { FC, Fragment } from "react"
import { Provider } from "react-redux"
import store from "../../store"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import theme from "../../styles/theme"
import Header from "../header"
import Pokedex from "../pokedex"
import { Box } from "rebass"

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
                margin: 0;
                min-height: 100vh;
              }
            `}
          />
          <Box variant="styles.root">
            <Header />
            <Pokedex />
          </Box>
        </Fragment>
      </ThemeProvider>
    </Provider>
  )
}

export default App
