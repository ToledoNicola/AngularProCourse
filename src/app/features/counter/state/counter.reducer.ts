import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const counterFeatureKey = 'counter';

export interface State {

}

export const initialState: State = {

};

const counterReducer = createReducer(
  initialState,

  on(CounterActions.loadCounters, state => state),
  on(CounterActions.loadCountersSuccess, (state, action) => state),
  on(CounterActions.loadCountersFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return counterReducer(state, action);
}
