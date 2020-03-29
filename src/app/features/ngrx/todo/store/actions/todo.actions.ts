import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models/todo";

export const loadTodos = createAction("[Todo Page] Load Todos");

export const loadTodosSuccess = createAction(
  "[Todo Pege] Load Todos Success",
  props<{ data: Todo[] }>()
);

export const loadTodosFailure = createAction(
  "[Todo Page] Load Todos Failure",
  props<{ error: any }>()
);

export const addTodo = createAction(
  "[Todo Page] Add Todo",
  props<{ data: Todo }>()
);
export const addTodoSuccess = createAction("[Todo Page] Add Todo Success");
export const addTodoFailure = createAction(
  "[Todo Page] Add Todo Failure",
  props<{ error: any }>()
);

export const todoComplete = createAction(
  "[Todo Page] Todo Complete",
  props<{ id: string }>()
);
export const todoCompleteSuccess = createAction(
  "[Todo Page] Todo Complete Success"
);
export const todoCompleteFailure = createAction(
  "[Todo Page] Todo Complete Failure",
  props<{ error: any }>()
);
