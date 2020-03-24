import { Action } from "../features/redux/ngrx-fake/models";

export interface CounterState {
  number: number;
}
const initialStateCounter: CounterState = {
  number: 3
};

/**
 * solo operazioni sincrone nei reducers
 * le operazioni asincrone vanno nei sideEffect
 * @param state
 * @param action
 */
export function counterReducer(
  state = initialStateCounter,
  action: Action
): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, number: state.number + 1 };
      break;
    case "DECREMENT":
      return { ...state, number: state.number - 1 };
      break;
    case "RESET":
      return initialStateCounter;
      break;
  }
  return state;
}
