import { Action, createReducer, on } from "@ngrx/store";
import * as AuthActions from "./auth.actions";
import { User } from "../models/user";
export const authFeatureKey = "auth";

export interface State {
  user: User;
  loading: boolean;
  error: any;
}

export const initialState: State = {
  user: null,
  loading: false,
  error: null
};

const authReducer = createReducer(
  initialState,

  on(AuthActions.login, state => ({ ...state, loading: true })),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    loading: false,
    user: action.user
  })),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state,
    error: action.error,
    loading: false
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
