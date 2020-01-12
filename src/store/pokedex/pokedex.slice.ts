import { createSlice } from "redux-starter-kit"
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
  currentPokemonId: 1,
  types: pokeTypes
}

const { actions, reducer } = createSlice({
  slice: "pokedex",
  initialState,
  reducers: {
    setCurrentPokemon: (s, { payload }) => {
      s.currentPokemonId = payload
    }
  }
})

export { actions as pokedexActions, reducer as pokedexReducer }
