import React, { FC } from "react"
import { ExternalLink } from "../link"
import { Box, Text } from "rebass"

const Footer: FC = () => (
  <Box as="footer" sx={{ bg: "muted" }}>
    <Box
      variant="styles.container"
      sx={{
        alignItems: "center",
        display: ["block", null, "flex"],
        justifyContent: "space-between",
        textAlign: ["center", null, null],
        px: [2, 5],
        py: [2, 4]
      }}
    >
      <Text as="p" sx={{ mb: [1, null, null] }}>
        Made by{" "}
        <ExternalLink href="https://github.com/dcwds">dcwds</ExternalLink>
      </Text>
      <Box sx={{ textAlign: [null, null, "right"] }}>
        <Text as="p">Pokémon are trademarks of Nintendo.</Text>
        <Text as="p">
          Pokémon type icons by{" "}
          <ExternalLink href="https://thenounproject.com/ilariabernareggi">
            Ilaria Bernareggi
          </ExternalLink>
        </Text>
      </Box>
    </Box>
  </Box>
)

export default Footer
