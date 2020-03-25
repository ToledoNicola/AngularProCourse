import { Action, createReducer, on } from "@ngrx/store";

export interface Result {
  id: string;
  value: number;
  created: Date;
}
export interface CalculatorState {
  data: Result[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const initialState: CalculatorState = {
  data: [],
  loading: false,
  loaded: false,
  error: null
};

const calculatorReducer = createReducer(initialState);

export function reducer(state: CalculatorState | undefined, action: Action) {
  return calculatorReducer(state, action);
}
