import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromData from "../reducers/data.reducer";
import { selectSearchTitle } from "./ui.selectors";
import * as fromMovies from "../reducers";

export const selectDataState = createSelector(
  fromMovies.selectMoviesState,
  (state) => state.data
);
export const selectIsLoaded = createSelector(
  selectDataState,
  (state) => state.loaded
);
export const selectIsLoading = createSelector(
  selectDataState,
  (state) => state.loading
);
export const selectNextPage = createSelector(
  selectDataState,
  (state) => state.nextPage
);

export const selectMovies = createSelector(
  selectDataState,
  selectSearchTitle,
  (state, filterName) => {
    if (filterName == null || filterName == "") {
      return fromData.selectAll(state);
    }
    return fromData
      .selectAll(state)
      .filter((movie) =>
        movie.title.toUpperCase().includes(filterName.toUpperCase())
      );
  }
);

export const selectMovieId = createSelector(
  selectDataState,
  (state) => state.selectedMovieId
);

export const selectMovie = createSelector(
  selectDataState,
  selectMovieId,
  (state, movieId) => fromData.selectEntities(state)[movieId]
);
