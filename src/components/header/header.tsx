import React, { FC } from "react"
import { Box, Heading } from "rebass"

const Header: FC = () => (
  <Box as="header" sx={{ bg: "gray.0" }}>
    <Box
      variant="styles.container"
      sx={{
        color: "white",
        fontSize: 2,
        p: [2, 5]
      }}
    >
      <Heading
        as="h1"
        sx={{
          fontSize: 2
        }}
      >
        Pokédex
      </Heading>
    </Box>
  </Box>
)

export default Header
