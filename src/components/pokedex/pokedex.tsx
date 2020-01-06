import React, { FC, useEffect } from "react"
import { Box, Heading, Text } from "rebass"

import { useDispatch, useSelector } from "react-redux"
import {
  Pokemon,
  pokedexActions,
  pokedexSelectors,
  fetchPokemon
} from "../../store/pokedex"

import { map } from "lodash/fp"

const Pokedex: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPokemon())
  }, [dispatch])

  return <Box as="article">Hello</Box>
}

export default Pokedex
