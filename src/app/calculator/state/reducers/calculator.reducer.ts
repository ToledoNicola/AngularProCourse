import { Action, createReducer, on } from "@ngrx/store";
import * as CalculatorActions from "../actions/calculator.actions";

export const calculatorFeatureKey = "calculator";
export enum Operators {
  somma,
  moltiplicazione,
  sottrazione,
  divisione,
  risultato
}

// manca il +-
export enum Functions {
  cancella,
  percentuale
}

export interface State {
  result: number;
  operator: Operators;
  number: number;
  function: Functions;
}

export const initialState: State = {
  result: 0,
  operator: null,
  number: null,
  function: null
};

const calculatorReducer = createReducer(
  initialState,

  on(CalculatorActions.loadCalculators, state => state),
  on(CalculatorActions.loadCalculatorsSuccess, (state, action) => state),
  on(CalculatorActions.loadCalculatorsFailure, (state, action) => state)
);

export function reducer(state: State | undefined, action: Action) {
  return calculatorReducer(state, action);
}
