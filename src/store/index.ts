import store from "./configureStore"
import { PostsState } from "./posts"

export type AppState = {
  posts: PostsState
}

export default store
