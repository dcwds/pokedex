import { createSlice, PayloadAction } from "redux-starter-kit"
import { PokedexState, Pokemon, PokeType } from "."

const primitivePokeTypes = [
  "Normal",
  "Fighting",
  "Flying",
  "Poison",
  "Ground",
  "Rock",
  "Bug",
  "Ghost",
  "Steel",
  "Fire",
  "Water",
  "Grass",
  "Electic",
  "Psychic",
  "Ice",
  "Dragon",
  "Dark",
  "Fairy"
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
