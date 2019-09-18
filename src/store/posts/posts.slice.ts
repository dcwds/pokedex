import { createSlice, PayloadAction } from "redux-starter-kit"
import { PostsState, Posts } from "."

const initialState: PostsState = {
  loading: true,
  items: []
}

const { actions, reducer } = createSlice({
  slice: "posts",
  initialState,
  reducers: {
    setPosts: (s: PostsState, { payload }: PayloadAction<Posts>) => {
      s.loading = false
      s.items = payload
    }
  }
})

export { actions as postsActions, reducer as postsReducer }
