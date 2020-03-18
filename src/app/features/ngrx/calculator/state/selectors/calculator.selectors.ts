import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCalculator from "../reducers";

export const selectCalculatorState = createFeatureSelector<
  fromCalculator.CalculatorModuleState
>(fromCalculator.calculatorFeatureKey);

export const selectResult = createSelector(
  selectCalculatorState,
  (state: fromCalculator.CalculatorModuleState) => state.ui.display
);
