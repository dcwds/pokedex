import { AppState } from ".."
import { createSelector } from "redux-starter-kit"

export const selectPokedexState = (s: AppState) => s.pokedex

export const selectLoading = createSelector(
  selectPokedexState,
  pokedex => pokedex.loading
)

export const selectPokemon = createSelector(
  selectPokedexState,
  pokedex => pokedex.pokemon
)
