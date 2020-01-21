import { SITE_TITLE } from "../../constants"
import React, { FC } from "react"
import { ExternalLink, InternalLink } from "../link"
import { ReactComponent as GitHubIcon } from "../../assets/svgs/github.svg"
import { Box, Flex, Heading } from "rebass"

const Header: FC = () => (
  <Box as="header" sx={{ bg: "muted" }}>
    <Flex
      variant="styles.container"
      sx={{
        color: "accent",
        fontSize: 2,
        alignItems: "center",
        justifyContent: "space-between",
        px: [2, 5],
        py: [2, 4]
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

      <ExternalLink
        href="https://github.com/dcwds/pokedex"
        sx={{
          lineHeight: 0,
          "& > svg": {
            fill: "text",
            height: 35,
            width: 35,
            transition: "fill 0.2s ease-in-out",
            willChange: "fill"
          },
          "&:hover > svg": {
            fill: "accent"
          }
        }}
      >
        <GitHubIcon />
      </ExternalLink>
    </Flex>
  </Box>
)

export default Header
