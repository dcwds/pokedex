import { createSlice, PayloadAction } from "redux-starter-kit"
import { PokedexState, AllPokemon } from "."

const initialState: PokedexState = {
  loading: true,
  pokemon: []
}

const { actions, reducer } = createSlice({
  slice: "pokedex",
  initialState,
  reducers: {
    setPokedex: (s: PokedexState, { payload }: PayloadAction<AllPokemon>) => {
      s.loading = false
      s.pokemon = payload
    }
  }
})

export { actions as pokedexActions, reducer as pokedexReducer }
