import * as filterSelectors from "./filters.selectors"
import { filtersActions, filtersReducer } from "./filters.slice"

export type FiltersState = {
  searchTerm: string
}

export { filtersActions, filtersReducer, filterSelectors }
