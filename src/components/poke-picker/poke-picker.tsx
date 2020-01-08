import React, { FC, Fragment, useEffect } from "react"
import { Box } from "rebass"
import { Scrollbars as Scroll, ScrollbarProps } from "react-custom-scrollbars"
import PokemonItem from "../pokemon"
import Loader from "../loader"
import PokeSearch from "../poke-search"

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
      margin: ".5rem",
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
      <Box variant="styles.container" sx={{ flexGrow: 1 }}>
        <Scroll
          renderThumbHorizontal={renderThumb}
          renderThumbVertical={renderThumb}
        >
          {loading && <Loader />}
          {!!pokemon.length && <PokemonList pokemon={pokemon} />}
        </Scroll>
      </Box>
    </Fragment>
  )
}

export default PokePicker
