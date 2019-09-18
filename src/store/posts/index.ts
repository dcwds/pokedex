import * as postsSelectors from "./posts.selectors"
import { postsActions, postsReducer } from "./posts.slice"

export type Post = {
  id: number
  title: string
  body: string
  author: string
}

export type Posts = Post[]

export type PostsState = {
  loading: boolean
  items: Posts
}

export { postsActions, postsReducer, postsSelectors }
