import { AppState } from ".."
import { createSelector } from "redux-starter-kit"
import { filterSelectors } from "../filters"

import { filter, includes, join, lowerCase } from "lodash/fp"

const { selectSearchTerm } = filterSelectors

export const selectPokedexState = (s: AppState) => s.pokedex

export const selectLoading = createSelector(
  selectPokedexState,
  pokedex => pokedex.loading
)

export const selectPokemon = createSelector(
  selectPokedexState,
  pokedex => pokedex.pokemon
)

export const selectPokeTypes = createSelector(
  selectPokedexState,
  pokedex => pokedex.types
)

export const selectPokemonBySearchTerm = createSelector(
  selectPokemon,
  selectSearchTerm,
  (pokemon, term) => {
    // If no search term is provided, use all pokemon.
    if (!term) return pokemon

    return filter(
      p => includes(term, lowerCase(join(" ", p.keywords))),
      pokemon
    )
  }
)

export const selectFilteredPokemon = createSelector(
  selectPokemonBySearchTerm,
  pokemon => pokemon
)
