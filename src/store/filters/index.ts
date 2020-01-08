import * as filterSelectors from "./filters.selectors"
import { filtersActions, filtersReducer } from "./filters.slice"

export type FiltersState = {
  searchTerm: string
  activeFilterIds: []
}

export { filtersActions, filtersReducer, filterSelectors }
