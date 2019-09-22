import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import App from "./components/app"

import { Provider } from "react-redux"
import store from "./store"

import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import theme from "./styles/theme"

import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Global
          styles={css`
            html,
            body {
              height: 100vh;
              margin: 0;
              min-height: 100vh;
            }
          `}
        />
        <App />
      </Fragment>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
