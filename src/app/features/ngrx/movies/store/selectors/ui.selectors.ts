import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromUi from "../reducers/ui.reducer";
import * as fromMovies from "../reducers";

export const selectUiState = createSelector(
  fromMovies.selectMoviesState,
  (state) => state.ui
);
export const selectSearchTitle = createSelector(
  selectUiState,
  (state) => state.searchTitle
);
export const selectListType = createSelector(
  selectUiState,
  (state) => state.selectList
);
