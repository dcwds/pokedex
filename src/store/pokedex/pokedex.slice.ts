import { createSlice, Action, PayloadAction } from "redux-starter-kit"
import { PokedexState, AllPokemon } from "."

const initialState: PokedexState = {
  loading: false,
  error: null,
  pokemon: []
}

const { actions, reducer } = createSlice({
  slice: "pokedex",
  initialState,
  reducers: {
    setPokedex: (s: PokedexState, action: Action) => {
      s.loading = true
    },
    setPokedexSuccess: (
      s: PokedexState,
      { payload }: PayloadAction<AllPokemon>
    ) => {
      s.loading = false
      s.pokemon = payload
    },
    setPokedexFailure: (
      s: PokedexState,
      { payload }: PayloadAction<string>
    ) => {
      s.loading = false
      s.error = payload
    }
  }
})

export { actions as pokedexActions, reducer as pokedexReducer }
