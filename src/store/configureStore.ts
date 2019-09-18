import { configureStore, getDefaultMiddleware } from "redux-starter-kit"
import { postsReducer } from "./posts/posts.slice"
import logger from "redux-logger"

export const reducer = {
  posts: postsReducer
}

const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production"
})

export default store
