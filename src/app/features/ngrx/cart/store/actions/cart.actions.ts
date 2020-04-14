import { createAction, props } from "@ngrx/store";

export const loadItems = createAction("[Cart INIT] Load Items");

export const loadItemsSuccess = createAction(
  "[Cart API] Load Items Success",
  props<{ data: any }>()
);

export const loadItemsFailure = createAction(
  "[Cart API] Load Items Failure",
  props<{ error: any }>()
);
