import React, { FC } from "react"
import { Box } from "rebass"
import Header from "../header"
import Posts from "../posts"

const App: FC = () => {
  return (
    <Box variant="styles.root">
      <Header />
      <Posts />
    </Box>
  )
}

export default App
