import { SITE_TITLE } from "../../constants"
import React, { FC } from "react"
import { Link } from "react-router-dom"
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
      <Link to="/">
        <Heading
          as="h1"
          sx={{
            fontSize: 2
          }}
        >
          {SITE_TITLE}
        </Heading>
      </Link>
    </Box>
  </Box>
)

export default Header
