import { configureStore, getDefaultMiddleware } from "redux-starter-kit"
import { pokedexReducer } from "./pokedex/pokedex.slice"
import logger from "redux-logger"

export const reducer = {
  pokedex: pokedexReducer
}

const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production"
})

export default store
