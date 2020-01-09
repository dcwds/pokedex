import { AppState } from ".."
import { createSelector } from "redux-starter-kit"

export const selectFiltersState = (s: AppState) => s.filters

export const selectSearchTerm = createSelector(
  selectFiltersState,
  filters => filters.searchTerm
)

export const selectActiveFilterIds = createSelector(
  selectFiltersState,
  filters => filters.activeFilterIds
)
