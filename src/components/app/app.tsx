import React, { FC } from "react"
import { Box } from "rebass"
import Header from "../header"
import Posts from "../posts"

const App: FC = () => {
  return (
    <Box
      sx={{
        bg: "gray.1",
        color: "white",
        minHeight: "100vh"
      }}
      variant="styles.root"
    >
      <Header />
      <Box as="main" sx={{ p: 4 }}>
        <Posts />
      </Box>
    </Box>
  )
}

export default App
