import { AppState } from ".."
import { createSelector } from "redux-starter-kit"

export const selectPosts = (s: AppState) => s.posts

export const selectLoading = createSelector(
  selectPosts,
  posts => posts.loading
)

export const selectPostsItems = createSelector(
  selectPosts,
  posts => posts.items
)
