import { Action, createReducer, on } from "@ngrx/store";
import * as MoviesActions from "../actions/movies.actions";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Movie } from "../../models/movie";

export const moviesFeatureKey = "movies";
const adapter = createEntityAdapter<Movie>();
export interface State extends EntityState<Movie> {
  page: number;
  total_results: number;
  total_pages: number;
  loading: boolean;
  loaded: boolean;
  error: string;
  nameFileter: string;
}

export const initialState: State = adapter.getInitialState({
  page: null,
  total_pages: null,
  total_results: null,
  loading: false,
  loaded: false,
  error: null,
  nameFileter: null
});

const movieReducer = createReducer(
  initialState,

  on(MoviesActions.loadMovies, state => ({ ...state, loading: true })),
  on(MoviesActions.loadMoviesSuccess, (state, action) =>
    adapter.addAll(action.data.results, {
      ...state,
      page: action.data.page,
      total_pages: action.data.total_pages,
      total_results: action.data.total_results,
      loading: false,
      loaded: true
    })
  ),
  on(MoviesActions.loadMoviesFailure, (state, action) => ({
    ...state,
    error: action.error,
    loading: false
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
  selectTotal
} = adapter.getSelectors();
