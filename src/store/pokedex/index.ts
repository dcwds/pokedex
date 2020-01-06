import { Dispatch } from "redux"
import { PayloadAction, Action } from "redux-starter-kit"

import * as pokedexSelectors from "./pokedex.selectors"
import { pokedexActions, pokedexReducer } from "./pokedex.slice"
import { getAllPokemon } from "../../api"

export type Pokemon = {
  id: number
  name: string
  imageUrl: string
}

export type AllPokemon = Pokemon[]

export type PokedexState = {
  loading: boolean
  error: string | null
  pokemon: AllPokemon
}

export const fetchPokemon = () => async (
  dispatch: Dispatch<PayloadAction>
): Promise<Action> => {
  dispatch(pokedexActions.setPokedex())
  try {
    const pokemon = await getAllPokemon()
    return dispatch(pokedexActions.setPokedexSuccess(pokemon))
  } catch (e) {
    return dispatch(pokedexActions.setPokedexFailure(e.message))
  }
}

export { pokedexActions, pokedexReducer, pokedexSelectors }
