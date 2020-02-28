import { Action, createReducer, on } from "@ngrx/store";
import * as CounterActions from "./counter.actions";

export const counterFeatureKey = "counter";

export interface State {
  number: number;
}

export const initialState: State = {
  number: 0
};

const counterReducer = createReducer(
  initialState,

  on(CounterActions.increment, state => ({
    ...state,
    number: state.number + 1
  })),
  on(CounterActions.decrement, state => ({
    ...state,
    number: state.number - 1
  })),
  on(CounterActions.reset, state => initialState),
  on(CounterActions.loadCounters, state => state),
  on(CounterActions.loadCountersSuccess, (state, action) => state),
  on(CounterActions.loadCountersFailure, (state, action) => state)
);

export function reducer(state: State | undefined, action: Action) {
  return counterReducer(state, action);
}
