import React, { FC, Fragment } from "react"
import { Box, Flex } from "rebass"

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
                margin: 0;
                min-height: 100vh;
              }
            `}
          />
          <Box variant="styles.root">
            <Header />
            <Flex
              as="main"
              sx={{ p: [2, 4], flexDirection: "column", flex: "1" }}
            >
              <Flex sx={{ flexDirection: "column", flex: "1" }}>
                <Flex
                  sx={{ flexDirection: "column", flex: "1" }}
                  width={[1, 2 / 5]}
                >
                  <PokePicker />
                </Flex>
                <Box />
              </Flex>
            </Flex>
          </Box>
        </Fragment>
      </ThemeProvider>
    </Provider>
  )
}

export default App
