import React, { FC, Fragment } from "react"
import { useSelector } from "react-redux"
import { pokedexSelectors, Pokemon } from "../../store/pokedex"
import PokemonItem from "../pokemon"
import PokeSearch from "../poke-search"
import PokeFilters from "../poke-filters"
import { Box, Flex } from "rebass"
import { Scrollbars as Scroll, ScrollbarProps } from "react-custom-scrollbars"

import { map } from "lodash/fp"

type PokemonListProps = {
  pokemon: Pokemon[]
}

const PokemonList: FC<PokemonListProps> = ({ pokemon }) => (
  <Box
    sx={{
      display: "grid",
      gap: ".5rem",
      margin: ".75rem",
      gridTemplateColumns: "repeat(auto-fill, minmax(75px, 1fr))"
    }}
  >
    {map(
      (p: Pokemon) => (
        <PokemonItem key={p.id} {...p} />
      ),
      pokemon
    )}
  </Box>
)

const PokePicker: FC = () => {
  const pokemon = useSelector(pokedexSelectors.selectFilteredPokemon)

  const renderThumb: FC<ScrollbarProps> = (style, ...props) => {
    const thumbStyle = {
      backgroundColor: "rgba(255,255,255, 0.3)",
      borderRadius: "5px",
      cursor: "pointer",
      position: "absolute" as "absolute",
      top: 1,
      right: 1,
      width: "100%"
    }
    return <div style={{ ...style, ...thumbStyle }} {...props} />
  }

  return (
    <Fragment>
      <PokeSearch />
      <PokeFilters />
      <Flex variant="styles.card" sx={{ flex: 1 }}>
        <Scroll
          style={{ flex: 1, height: "auto" }}
          renderThumbHorizontal={renderThumb}
          renderThumbVertical={renderThumb}
        >
          <PokemonList pokemon={pokemon} />
        </Scroll>
      </Flex>
    </Fragment>
  )
}

export default PokePicker
