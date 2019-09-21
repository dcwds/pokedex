import React, { FC } from "react"
import Header from "../header"
import Posts from "../posts"

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Posts />
    </div>
  )
}

export default App
