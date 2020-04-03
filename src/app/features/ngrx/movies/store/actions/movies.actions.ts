import { createAction, props } from "@ngrx/store";
import { Movie } from "../../models/movie";

export const loadMovies = createAction("[Movies API] Load Movies");

export const loadMoviesSuccess = createAction(
  "[Movies API] Load Movies Success",
  props<{
    data: {
      results: Movie[];
      total_pages: number;
      total_results: number;
      page: number;
    };
  }>()
);

export const loadMoviesFailure = createAction(
  "[Movies API] Load Movies Failure",
  props<{ error: any }>()
);
