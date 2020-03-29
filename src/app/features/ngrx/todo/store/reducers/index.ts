import * as fromTodo from "./todo.reducer";
import * as fromTodoUI from "./todo-ui.reducer";
import { ActionReducerMap } from "@ngrx/store";

export const todoFeatureKey = "todo";

interface TodoMap {
  data: fromTodo.State;
  ui: fromTodoUI.State;
}
export const reducersMap: ActionReducerMap<TodoMap> = {
  data: fromTodo.reducer,
  ui: fromTodoUI.reducer
};
