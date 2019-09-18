import { createSlice, PayloadAction } from "redux-starter-kit"
import { PostsInitialState, Posts } from "./posts.types"

const initialState: PostsInitialState = {
  loading: true,
  items: []
}

const { actions, reducer } = createSlice({
  slice: "posts",
  initialState,
  reducers: {
    setPosts: (s: PostsInitialState, { payload }: PayloadAction<Posts>) => {
      s.loading = false
      s.items = payload
    }
  }
})

export { actions as postsActions, reducer as postsReducer }
