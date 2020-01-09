import { AppState } from ".."
import { createSelector } from "redux-starter-kit"
import { filtersSelectors } from "../filters"

import { every, filter, includes, join, lowerCase } from "lodash/fp"

const { selectSearchTerm, selectActiveFilterIds } = filtersSelectors

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
  selectActiveFilterIds,
  (pokemon, filters) =>
    // When no filters are set, use all pokemon.
    filters.length
      ? filter(p => every(id => includes(id, p.typeIds), filters), pokemon)
      : pokemon
)
