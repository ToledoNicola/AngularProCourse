import { createAction, props } from "@ngrx/store";
import { User } from "../models/user";

export const login = createAction("[Auth Login Page] Login");

export const loginSuccess = createAction(
  "[Auth Login Page] Login Success",
  props<{ user: User }>()
);

export const loginFailure = createAction(
  "[Auth Login Page] Login Failure",
  props<{ error: any }>()
);
