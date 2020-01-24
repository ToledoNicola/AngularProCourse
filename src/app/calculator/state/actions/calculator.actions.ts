import { createAction, props } from "@ngrx/store";

export const selectedNumber = createAction(
  "[Calculator] Selected Number",
  props<{ number: number }>()
);
export const loadCalculators = createAction("[Calculator] Load Calculators");

export const loadCalculatorsSuccess = createAction(
  "[Calculator] Load Calculators Success",
  props<{ data: any }>()
);

export const loadCalculatorsFailure = createAction(
  "[Calculator] Load Calculators Failure",
  props<{ error: any }>()
);
