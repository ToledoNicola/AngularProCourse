/**
 * qui definisco lo store le sue impostazioni
 * ed importo tutti i vari reducers che andranno a comporre lo store
 */

import { ReducerMap } from "../features/redux/ngrx-fake/models";
import { CounterState, counterReducer } from "./counter.reducer";

export interface AppState {
  counter: CounterState;
}

export const reducersFake: ReducerMap<AppState> = {
  counter: counterReducer
};
