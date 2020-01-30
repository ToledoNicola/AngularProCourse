import { createAction, props } from "@ngrx/store";

export const enteredNumber = createAction(
  "[Calculator] Entereded Number",
  props<{ number: number }>()
);
export const reset = createAction("[Calculator] Reset");

export const loadCalculators = createAction("[Calculator] Load Calculators");

export const loadCalculatorsSuccess = createAction(
  "[Calculator] Load Calculators Success",
  props<{ data: any }>()
);

export const loadCalculatorsFailure = createAction(
  "[Calculator] Load Calculators Failure",
  props<{ error: any }>()
);
