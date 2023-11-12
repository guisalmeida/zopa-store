import { createSelector } from 'reselect'
import { TSearchState } from '../reducers/searchReducer'

const selectSearchReducer = (state): TSearchState => state.search

export const selectIsSearchOpen = createSelector(
  [selectSearchReducer],
  search => search.isSearchOpen,
)

export const selectSearchProducts = createSelector(
  [selectSearchReducer],
  search => search.searchProducts,
)
