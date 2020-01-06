import React, { FC, useEffect } from "react"
import { Box, Heading, Text } from "rebass"
import PokemonItem from "../pokemon"

import { useDispatch, useSelector } from "react-redux"
import { pokedexSelectors, fetchPokemon } from "../../store/pokedex"

import { map } from "lodash/fp"

const { selectLoading, selectPokemon } = pokedexSelectors

const Pokedex: FC = () => {
  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)
  const pokemon = useSelector(selectPokemon)

  useEffect(() => {
    dispatch(fetchPokemon())
  }, [dispatch])

  return (
    <Box as="article">
      {loading && "Loading..."}{" "}
      {!!pokemon.length && map(p => <PokemonItem {...p} />, pokemon)}
    </Box>
  )
}

export default Pokedex
