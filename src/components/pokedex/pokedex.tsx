import React, { FC, useEffect } from "react"
import { Box } from "rebass"
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
    <Box
      sx={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fill, minmax(50px, 1fr))"
      }}
    >
      {loading && "Loading..."}{" "}
      {!!pokemon.length && map(p => <PokemonItem key={p.id} {...p} />, pokemon)}
    </Box>
  )
}

export default Pokedex
