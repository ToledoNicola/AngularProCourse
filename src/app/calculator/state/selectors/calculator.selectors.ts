import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCalculator from '../reducers/calculator.reducer';

export const selectCalculatorState = createFeatureSelector<fromCalculator.State>(
  fromCalculator.calculatorFeatureKey
);
