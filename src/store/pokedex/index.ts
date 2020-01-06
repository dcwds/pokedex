import { Dispatch } from "redux"
import { PayloadAction, Action } from "redux-starter-kit"

import * as pokedexSelectors from "./pokedex.selectors"
import { pokedexActions, pokedexReducer } from "./pokedex.slice"

import { map } from "lodash/fp"

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

export const getAllPokemon = () => {
  const pokeIds = Array.from(Array(152).keys()).slice(1)
  const allPokemon = map(async (id: number) => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await pokemon.json()

    return {
      id: data.id,
      name: data.name,
      imageUrl: data.sprites.front_default
    } as Pokemon
  }, pokeIds)

  return Promise.all(allPokemon)
}

export { pokedexActions, pokedexReducer, pokedexSelectors }
