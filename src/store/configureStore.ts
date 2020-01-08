import { configureStore, getDefaultMiddleware } from "redux-starter-kit"
import { pokedexReducer } from "./pokedex"
import { filtersReducer } from "./filters"
import thunk from "redux-thunk"
import logger from "redux-logger"

export const reducer = {
  pokedex: pokedexReducer,
  filters: filtersReducer
}

const middleware = [...getDefaultMiddleware(), thunk, logger]

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production"
})

export default store
