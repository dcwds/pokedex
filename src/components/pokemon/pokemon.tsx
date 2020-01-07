import React, { FC } from "react"
import { Pokemon } from "../../store/pokedex"
import AspectRatio from "../aspect-ratio"
import AsyncImage from "../async-image"
import { Box, Text } from "rebass"

const PokemonItem: FC<Pokemon> = ({ id, name }) => (
  <AspectRatio ratio={1}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <AsyncImage
        source={`/images/pokemon/${id}.webp`}
        alt={name}
        height={35}
      />
      <Text sx={{ fontSize: 0, fontWeight: "heading", marginTop: 1 }}>
        {name}
      </Text>
    </Box>
  </AspectRatio>
)

export default PokemonItem
