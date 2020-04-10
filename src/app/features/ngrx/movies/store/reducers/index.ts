import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromData from "./data.reducer";
import * as fromUi from "./ui.reducer";

export const moviesFeatureKey = "movies";

interface MoviesState {
  ui: fromUi.State;
  data: fromData.State;
}
export const reducers: ActionReducerMap<MoviesState> = {
  ui: fromUi.reducer,
  data: fromData.reducer,
};

export const selectMoviesState = createFeatureSelector<MoviesState>(
  moviesFeatureKey
);
