import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, delay, exhaustMap } from "rxjs/operators";
import { EMPTY, of } from "rxjs";

import * as AuthActions from "./auth.actions";

@Injectable()
export class AuthEffects {
  loadAuths$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(() =>
        of({
          id: "jsj33jk3",
          name: "Nicola Toledo",
          email: "nicola@rosso.it"
        }).pipe(
          delay(3000),
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
