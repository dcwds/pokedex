import React, { FC } from "react"
import { Box, Text } from "rebass"
const Footer: FC = () => (
  <Box as="footer" sx={{ bg: "muted" }}>
    <Box variant="styles.container" sx={{ p: [2, 5] }}>
      <Text as="p">Made by dcwds</Text>
      <Text as="p">Pokémon are trademarks of Nintendo.</Text>
    </Box>
  </Box>
)

export default Footer
