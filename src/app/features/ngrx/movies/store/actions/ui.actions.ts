import { createAction, props } from "@ngrx/store";

export const searchMovie = createAction(
  "[Movies UI] Search Movie",
  props<{ title: string }>()
);
export const listMovie = createAction(
  "[Movies UI select] Change List Movie",
  props<{ list: string }>()
);
