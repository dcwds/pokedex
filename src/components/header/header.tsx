import { SITE_TITLE } from "../../constants"
import React, { FC } from "react"
import { InternalLink } from "../link"
import { Box, Heading } from "rebass"

const Header: FC = () => (
  <Box as="header" sx={{ bg: "muted" }}>
    <Box
      variant="styles.container"
      sx={{
        color: "accent",
        fontSize: 2,
        p: [2, 5]
      }}
    >
      <InternalLink to="/" sx={{ color: "accent", display: "inline-block" }}>
        <Heading
          as="h2"
          sx={{
            fontSize: 2
          }}
        >
          {SITE_TITLE}
        </Heading>
      </InternalLink>
    </Box>
  </Box>
)

export default Header
