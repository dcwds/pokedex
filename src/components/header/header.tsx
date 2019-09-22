import React, { FC } from "react"
import { Box, Heading } from "rebass"

const Header: FC = () => (
  <Box
    sx={{
      fontSize: 2,
      p: 4
    }}
  >
    <Heading
      as="h1"
      sx={{
        fontSize: 2
      }}
    >
      React Redux Boilerplate
    </Heading>
  </Box>
)

export default Header
