import { SITE_TITLE, SITE_DESCRIPTION } from "../../constants"
import React, { FC, Fragment } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../store"

import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import tooltipStyles from "../../styles/tooltip"
import theme from "../../styles/theme"

import Header from "../header"
import Footer from "../footer"
import Pokedex from "../pokedex"
import Helmet from "react-helmet"
import { Box } from "rebass"

const App: FC = () => (
  <Provider store={store}>
    <Router>
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
              ${tooltipStyles}
            `}
          />
          <Helmet>
            <title>{SITE_TITLE}</title>
            <meta name="description" content={SITE_DESCRIPTION} />
          </Helmet>
          <Box variant="styles.root">
            <Header />
            <Switch>
              <Route exact path={["/", "/pokemon", "/pokemon/:id"]}>
                <Pokedex />
              </Route>
            </Switch>
            <Footer />
          </Box>
        </Fragment>
      </ThemeProvider>
    </Router>
  </Provider>
)

export default App
