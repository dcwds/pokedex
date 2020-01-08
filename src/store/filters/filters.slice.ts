import { createSlice, PayloadAction } from "redux-starter-kit"
import { FiltersState } from "."

const initialState: FiltersState = {
  searchTerm: "",
  activeFilterIds: []
}

const { actions, reducer } = createSlice({
  slice: "filters",
  initialState,
  reducers: {
    setSearchTerm: (s, { payload }: PayloadAction<string>) => {
      s.searchTerm = payload.toLowerCase()
    }
  }
})

export { actions as filtersActions, reducer as filtersReducer }
