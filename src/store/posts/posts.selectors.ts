import { AppState } from ".."
import { createSelector } from "redux-starter-kit"

export const selectPostsState = (s: AppState) => s.posts

export const selectLoading = createSelector(
  selectPostsState,
  posts => posts.loading
)

export const selectPosts = createSelector(
  selectPostsState,
  posts => posts.items
)
