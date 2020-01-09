import * as filtersSelectors from "./filters.selectors"
import { filtersActions, filtersReducer } from "./filters.slice"

export type FiltersState = {
  searchTerm: string
  activeFilterIds: number[]
}

export { filtersActions, filtersReducer, filtersSelectors }
