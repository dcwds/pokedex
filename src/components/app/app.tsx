import React, { FC } from "react"
import Header from "../header"
import Posts from "../posts"

import "./app.css"

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Posts />
    </div>
  )
}

export default App
