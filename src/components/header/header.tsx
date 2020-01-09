import React, { FC } from "react"
import { Box, Heading } from "rebass"

const Header: FC = () => (
  <Box
    as="header"
    sx={{
      color: "white",
      fontSize: 2,
      mb: [2, 5],
      px: [2, 4],
      py: 4
    }}
  >
    <Heading
      as="h1"
      sx={{
        fontSize: 2
      }}
    >
      Pokedex
    </Heading>
  </Box>
)

export default Header
