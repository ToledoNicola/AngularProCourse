import { createAction, props } from "@ngrx/store";

export const increment = createAction("[Counter] Incrememnt");
export const decrement = createAction("[Counter] Decrement");
export const reset = createAction("[Counter] Reset");

export const loadCounters = createAction("[Counter] Load Counters");
export const loadCountersSuccess = createAction(
  "[Counter] Load Counters Success",
  props<{ data: any }>()
);

export const loadCountersFailure = createAction(
  "[Counter] Load Counters Failure",
  props<{ error: any }>()
);
