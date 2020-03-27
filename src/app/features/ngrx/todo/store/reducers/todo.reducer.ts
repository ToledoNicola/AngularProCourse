import { Action, createReducer, on } from "@ngrx/store";
import * as TodoActions from "../actions/todo.actions";
import { Todo } from "../../models/todo";

export const todoFeatureKey = "todo";

export interface State {
  entities: Todo[];
  loading: boolean;
  error?: any;
}

export const initialState: State = {
  entities: [],
  loading: false,
  error: null
};

const todoReducer = createReducer(
  initialState,

  on(TodoActions.loadTodos, state => {
    return { ...state, loading: true };
  }),
  on(TodoActions.loadTodosSuccess, (state, action) => {
    return { ...state, entities: action.data, loading: false };
  }),
  on(TodoActions.loadTodosFailure, (state, action) => {
    return { ...state, error: action.error };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}
