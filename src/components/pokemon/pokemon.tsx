import React, { FC } from "react"
import { Pokemon } from "../../store/pokedex"
import { Box } from "rebass"

const PokemonItem: FC<Pokemon> = ({ name, imageUrl }) => <Box>{name}</Box>

export default PokemonItem
