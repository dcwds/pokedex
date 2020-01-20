import { createSlice } from "@reduxjs/toolkit"
import { PokedexState, PokeType } from "."
import pokemonData from "../../data/pokemon.json"

const primitivePokeTypes = [
  "bug",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water"
]

const pokeTypes = primitivePokeTypes.reduce(
  (types, type, i) => {
    types.push({
      id: i + 1,
      name: type
    })

    return types
  },
  [] as PokeType[]
)

const initialState: PokedexState = {
  pokemon: pokemonData,
  currentPokemonId: null,
  types: pokeTypes
}

const { actions, reducer } = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    setCurrentPokemon: (s, { payload }) => {
      s.currentPokemonId = payload
    }
  }
})

export { actions as pokedexActions, reducer as pokedexReducer }
