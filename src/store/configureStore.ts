import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { pokedexReducer } from "./pokedex"
import { filtersReducer } from "./filters"
import logger from "redux-logger"

export const reducer = {
  pokedex: pokedexReducer,
  filters: filtersReducer
}

const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production"
})

export default store
