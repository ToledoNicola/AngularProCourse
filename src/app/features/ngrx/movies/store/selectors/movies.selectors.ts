import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromMovies from "../reducers/movies.reducer";

export const selectMoviesState = createFeatureSelector<fromMovies.State>(
  fromMovies.moviesFeatureKey
);
export const selectFileterName = createSelector(
  selectMoviesState,
  (state) => state.titleFileter
);
export const selectIsLoaded = createSelector(
  selectMoviesState,
  (state) => state.loaded
);
export const selectIsLoading = createSelector(
  selectMoviesState,
  (state) => state.loading
);

export const selectMovies = createSelector(
  selectMoviesState,
  selectFileterName,
  (state, filterName) => {
    if (filterName == null || filterName == "") {
      return fromMovies.selectAll(state);
    }
    return fromMovies
      .selectAll(state)
      .filter((movie) =>
        movie.title.toUpperCase().includes(filterName.toUpperCase())
      );
  }
);
