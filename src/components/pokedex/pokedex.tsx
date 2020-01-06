import React, { FC, useEffect } from "react"
import { Box, Heading, Text } from "rebass"

import { useDispatch, useSelector } from "react-redux"
import { Pokemon, pokedexActions, pokedexSelectors } from "../../store/pokedex"

import { map } from "lodash/fp"

const Pokedex: FC = () => {
  return <Box as="article"></Box>
}

export default Pokedex
