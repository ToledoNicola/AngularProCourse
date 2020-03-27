import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromTodo from "../reducers/todo.reducer";

export const selectTodoState = createFeatureSelector<fromTodo.State>(
  fromTodo.todoFeatureKey
);

export const selectLoading = createSelector(
  selectTodoState,
  state => state.loading
);
