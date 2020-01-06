import store from "./configureStore"
import { PokedexState } from "./pokedex"

export type AppState = {
  pokedex: PokedexState
}

export default store
