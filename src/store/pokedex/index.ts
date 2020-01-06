import * as pokedexSelectors from "./pokedex.selectors"
import { pokedexActions, pokedexReducer } from "./pokedex.slice"

export type Pokemon = {
  id: number
  name: string
}

export type AllPokemon = Pokemon[]

export type PokedexState = {
  loading: boolean
  pokemon: AllPokemon
}

export { pokedexActions, pokedexReducer, pokedexSelectors }
