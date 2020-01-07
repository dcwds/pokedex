import React, { FC, useEffect } from "react"
import { Box } from "rebass"
import PokemonItem from "../pokemon"
import Loader from "../loader"

import { useDispatch, useSelector } from "react-redux"
import { pokedexSelectors, fetchPokemon, Pokemon } from "../../store/pokedex"

import { map } from "lodash/fp"

type PokemonListProps = {
  pokemon: Pokemon[]
}

const PokemonList: FC<PokemonListProps> = ({ pokemon }) => (
  <Box
    sx={{
      display: "grid",
      gap: ".5rem",
      gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))"
    }}
  >
    {map(
      p => (
        <PokemonItem key={p.id} {...p} />
      ),
      pokemon
    )}
  </Box>
)

const PokePicker: FC = () => {
  const dispatch = useDispatch()
  const { selectLoading, selectPokemon } = pokedexSelectors

  const loading = useSelector(selectLoading)
  const pokemon = useSelector(selectPokemon)

  useEffect(() => {
    dispatch(fetchPokemon())
  }, [dispatch])

  return (
    <Box variant="styles.container" sx={{ padding: 2 }}>
      {loading && <Loader />}
      {!!pokemon.length && <PokemonList pokemon={pokemon} />}
    </Box>
  )
}

export default PokePicker
