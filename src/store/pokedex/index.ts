import { Dispatch } from "redux"
import { PayloadAction, Action } from "redux-starter-kit"

import * as pokedexSelectors from "./pokedex.selectors"
import { pokedexActions, pokedexReducer } from "./pokedex.slice"
import { getAllPokemon } from "../../api"

import { AppState } from "../"

export type Pokemon = {
  id: number
  name: string
  keywords: string[]
  typeIds: number[]
}

export type PokeType = {
  id: number
  name: string
}

export type PokedexState = {
  loading: boolean
  error: string | null
  pokemon: Pokemon[]
  types: PokeType[]
}

export const fetchPokemon = () => async (
  dispatch: Dispatch<PayloadAction>,
  getState: () => AppState
): Promise<Action> => {
  dispatch(pokedexActions.setPokedex())
  try {
    const pokemon = await getAllPokemon(getState())
    return dispatch(pokedexActions.setPokedexSuccess(pokemon))
  } catch (e) {
    return dispatch(pokedexActions.setPokedexFailure(e.message))
  }
}

export { pokedexActions, pokedexReducer, pokedexSelectors }
