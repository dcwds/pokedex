import { createSlice, PayloadAction } from "redux-starter-kit"
import { PokedexState, Pokemon, PokeType } from "."

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
  loading: false,
  error: null,
  pokemon: [],
  types: pokeTypes
}

const { actions, reducer } = createSlice({
  slice: "pokedex",
  initialState,
  reducers: {
    setPokedex: (s, _action) => {
      s.loading = true
    },
    setPokedexSuccess: (s, { payload }: PayloadAction<Pokemon[]>) => {
      s.loading = false
      s.pokemon = payload
    },
    setPokedexFailure: (s, { payload }: PayloadAction<string>) => {
      s.loading = false
      s.error = payload
    }
  }
})

export { actions as pokedexActions, reducer as pokedexReducer }
