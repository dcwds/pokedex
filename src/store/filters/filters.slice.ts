import { createSlice } from "redux-starter-kit"
import { FiltersState } from "."

import { concat, filter, includes } from "lodash/fp"

const initialState: FiltersState = {
  searchTerm: "",
  activeFilterIds: []
}

const { actions, reducer } = createSlice({
  slice: "filters",
  initialState,
  reducers: {
    setSearchTerm: (s, { payload }) => {
      s.searchTerm = payload.toLowerCase()
    },
    setFilter: (s, { payload }) => {
      if (includes(payload, s.activeFilterIds)) {
        s.activeFilterIds = filter(id => id !== payload, s.activeFilterIds)
      } else {
        s.activeFilterIds = concat(payload, s.activeFilterIds)
      }
    }
  }
})

export { actions as filtersActions, reducer as filtersReducer }
