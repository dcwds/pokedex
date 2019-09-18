import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "emotion-theming"
import App from "./components/app"

import store from "./store"
import * as serviceWorker from "./serviceWorker"

// Use of the Rebass theme preset. One could easily roll their
// own custom theme. Check out: https://rebassjs.org
import theme from "@rebass/preset"

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
