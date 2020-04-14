import { createAction, props } from "@ngrx/store";

export const searchMovie = createAction(
  "[Movies/UI Page] Search Movie",
  props<{ title: string }>()
);
export const listMovie = createAction(
  "[Movies/UI Page select] Change List Movie",
  props<{ list: string }>()
);
