import { Action, createReducer, on } from "@ngrx/store";
import * as MoviesActions from "../actions/movies.actions";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Movie } from "../../models/movie";

export const moviesFeatureKey = "movies";
const adapter = createEntityAdapter<Movie>();
export interface State extends EntityState<Movie> {
  page: number;
  nextPage: number;
  total_results: number;
  total_pages: number;
  loading: boolean;
  loaded: boolean;
  error: string;
  titleFileter: string;
}

export const initialState: State = adapter.getInitialState({
  page: 0,
  nextPage: 1,
  total_pages: null,
  total_results: null,
  loading: false,
  loaded: false,
  error: null,
  titleFileter: null,
});

const movieReducer = createReducer(
  initialState,

  on(MoviesActions.loadMovies, (state) => ({ ...state, loaded: false })),
  on(MoviesActions.loadMoviesSuccess, (state, action) =>
    adapter.setAll(action.data.results, {
      ...state,
      page: action.data.page,
      nextPage: action.data.page + 1,
      total_pages: action.data.total_pages,
      total_results: action.data.total_results,
      loaded: true,
    })
  ),
  on(MoviesActions.loadMoreMoviesSuccess, (state, action) =>
    adapter.addMany(action.data.results, {
      ...state,
      page: action.data.page,
      nextPage: action.data.page + 1,
      loading: false,
    })
  ),
  on(MoviesActions.loadMoviesFailure, (state, action) => ({
    ...state,
    error: action.error,
    loading: false,
  })),
  on(MoviesActions.searchMovie, (state, action) => ({
    ...state,
    titleFileter: action.title,
  })),
  on(MoviesActions.loadMoreMovies, (state, action) => ({
    ...state,
    loading: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return movieReducer(state, action);
}

/**
 * selectEntities restituisce un oggetto con {id:movie} per recuperare un'entita direttamente senza andare a ciclare tutto l'array
 * selectAll restituisce l'array di movie
 */
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
