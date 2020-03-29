import { Action, createReducer, on } from "@ngrx/store";
import * as TodoActions from "../actions/todo.actions";
import { Todo } from "../../models/todo";
import { EntityState, createEntityAdapter } from "@ngrx/entity";

/**
 * reducer senza l'uso di entity
 */
// export interface State {
//   entities: Todo[];
//   loading: boolean;
//   error?: any;
// }

// export const initialState: State = {
//   entities: [],
//   loading: false,
//   error: null
// };

// const todoReducer = createReducer(
//   initialState,

//   on(TodoActions.loadTodos, state => {
//     return { ...state, loading: true };
//   }),
//   on(TodoActions.loadTodosSuccess, (state, action) => {
//     return { ...state, entities: action.data, loading: false };
//   }),
//   on(TodoActions.loadTodosFailure, (state, action) => {
//     return { ...state, error: action.error };
//   })
// );

/**
 * reducer con entity
 */
export interface State extends EntityState<Todo> {
  error: string | null;
}

export const adapter = createEntityAdapter<Todo>();
export const initialState: State = adapter.getInitialState({ error: null });

const todoReducer = createReducer(
  initialState,

  on(TodoActions.loadTodos, state => {
    return { ...state, loading: true };
  }),
  on(TodoActions.loadTodosSuccess, (state, action) => {
    return adapter.addAll(action.data, state);
  }),
  on(TodoActions.loadTodosFailure, (state, action) => {
    return { ...state, error: action.error };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}
