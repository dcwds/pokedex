import { AppState } from ".."
import { Pokemon } from "."
import { createSelector } from "@reduxjs/toolkit"
import { filtersSelectors } from "../filters"

import {
  every,
  filter,
  includes,
  join,
  lowerCase,
  map,
  prop,
  reduce
} from "lodash/fp"

const { selectSearchTerm, selectActiveFilterIds } = filtersSelectors

export const selectPokedexState = (s: AppState) => s.pokedex

export const selectPokemon = createSelector(
  selectPokedexState,
  pokedex => pokedex.pokemon
)

export const selectPokemonIds = createSelector(
  selectPokemon,
  pokemon => map(p => p.id, pokemon)
)

export const selectCurrentPokemonId = createSelector(
  selectPokedexState,
  pokedex => pokedex.currentPokemonId
)

export const selectCurrentPokemon = createSelector(
  selectPokemon,
  selectCurrentPokemonId,
  (pokemon, id) =>
    reduce(
      (currentPokemon, pokemon) => {
        if (pokemon.id === id) {
          currentPokemon = pokemon
        }

        return currentPokemon
      },
      {} as Pokemon,
      pokemon
    )
)

export const selectPokeTypes = createSelector(
  selectPokedexState,
  pokedex => pokedex.types
)

export const selectTypeNamesOfCurrentPokemon = createSelector(
  selectCurrentPokemon,
  selectPokeTypes,
  (pokemon, types) => map(id => prop("name", types[id - 1]), pokemon.typeIds)
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
