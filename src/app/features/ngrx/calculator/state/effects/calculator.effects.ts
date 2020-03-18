import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, concatMap } from "rxjs/operators";
import { EMPTY, of } from "rxjs";
import { CalculatorActions } from "../actions";

@Injectable()
export class CalculatorEffects {
  loadCalculators$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CalculatorActions.loadCalculators),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CalculatorActions.loadCalculatorsSuccess({ data })),
          catchError(error =>
            of(CalculatorActions.loadCalculatorsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
