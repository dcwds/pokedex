import React, { FC } from "react"
import { ExternalLink } from "../link"
import { Box, Text } from "rebass"

const Footer: FC = () => (
  <Box as="footer" sx={{ bg: "muted" }}>
    <Box variant="styles.container" sx={{ px: [2, 5], py: [2, 4] }}>
      <Text as="p">
        Made by{" "}
        <ExternalLink href="https://github.com/dcwds">dcwds</ExternalLink>
      </Text>
      <Text as="p">Pokémon are trademarks of Nintendo.</Text>
    </Box>
  </Box>
)

export default Footer
