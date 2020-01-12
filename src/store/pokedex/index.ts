import * as pokedexSelectors from "./pokedex.selectors"
import { pokedexActions, pokedexReducer } from "./pokedex.slice"

export type PokeStat = {
  name: string
  amount: number
}

export type PokeType = {
  id: number
  name: string
}

export type Pokemon = {
  id: number
  name: string
  height: number // in decimeters
  weight: number // in hectometers
  keywords: string[]
  typeIds: number[]
  stats: PokeStat[]
  spritePos: {
    x: number
    y: number
  }
}

export type PokedexState = {
  pokemon: Pokemon[]
  currentPokemonId: number | null
  types: PokeType[]
}

export { pokedexActions, pokedexReducer, pokedexSelectors }
