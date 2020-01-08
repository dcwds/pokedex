import store from "./configureStore"
import { PokedexState } from "./pokedex"
import { FiltersState } from "./filters"

export type AppState = {
  pokedex: PokedexState
  filters: FiltersState
}

export default store
