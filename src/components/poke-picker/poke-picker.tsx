import React, { FC, Fragment, useEffect } from "react"
import { Box, Flex } from "rebass"
import { Scrollbars as Scroll, ScrollbarProps } from "react-custom-scrollbars"
import PokemonItem from "../pokemon"
import Loader from "../loader"
import PokeSearch from "../poke-search"
import PokeFilters from "../poke-filters"

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
      gap: ".6rem",
      margin: ".6rem",
      gridTemplateColumns: "repeat(auto-fill, minmax(75px, 1fr))"
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
  const { selectLoading, selectFilteredPokemon } = pokedexSelectors

  const loading = useSelector(selectLoading)
  const pokemon = useSelector(selectFilteredPokemon)

  const renderThumb: FC<ScrollbarProps> = (style, ...props) => {
    const thumbStyle = {
      backgroundColor: "rgba(255,255,255, 0.3)",
      borderRadius: "5px"
    }
    return <div style={{ ...style, ...thumbStyle }} {...props} />
  }

  useEffect(() => {
    dispatch(fetchPokemon())
  }, [dispatch])

  return (
    <Fragment>
      <PokeSearch />
      <PokeFilters />
      <Flex variant="styles.container" sx={{ flex: 1 }}>
        <Scroll
          style={{ flex: 1, height: "auto" }}
          renderThumbHorizontal={renderThumb}
          renderThumbVertical={renderThumb}
        >
          {loading && <Loader />}
          {!!pokemon.length && <PokemonList pokemon={pokemon} />}
        </Scroll>
      </Flex>
    </Fragment>
  )
}

export default PokePicker
