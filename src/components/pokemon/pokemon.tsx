import React, { FC } from "react"
import { Pokemon } from "../../store/pokedex"
import AspectRatio from "../aspect-ratio"
import { Box, Text, Image } from "rebass"

const PokemonItem: FC<Pokemon> = ({ id, name }) => (
  <AspectRatio ratio={1}>
    <Box
      variant="buttons.listPrimary"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 1
      }}
    >
      <Image src={`/images/pokemon/${id}.webp`} alt={name} height={35} />
      <Text sx={{ fontSize: 0, fontWeight: "heading", mt: 1, opacity: 0.9 }}>
        {name}
      </Text>
    </Box>
  </AspectRatio>
)

export default PokemonItem
