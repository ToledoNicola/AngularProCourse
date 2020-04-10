import { Action, createReducer, on, createSelector } from "@ngrx/store";
import * as UiActions from "../actions/ui.actions";

enum List {
  popular = "popular",
  upcoming = "upcoming",
  topRated = "top_rated",
}

export interface State {
  selectList: string;
  searchTitle: string;
}

export const initialState: State = {
  selectList: List.popular,
  searchTitle: null,
};

const movieReducer = createReducer(
  initialState,
  on(UiActions.searchMovie, (state, action) => ({
    ...state,
    searchTitle: action.title,
  })),
  on(UiActions.listMovie, (state, action) => ({
    ...state,
    selectList: action.list,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return movieReducer(state, action);
}
