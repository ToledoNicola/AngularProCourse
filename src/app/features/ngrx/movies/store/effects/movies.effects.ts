import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, concatMap, switchMap } from "rxjs/operators";
import { EMPTY, of } from "rxjs";

import * as MoviesActions from "../actions/movies.actions";
import { MoviesDataService } from "../../services/movies-data.service";

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      switchMap(() =>
        this.moviesData.getPopular().pipe(
          map(data => MoviesActions.loadMoviesSuccess({ data })),
          catchError(error => of(MoviesActions.loadMoviesFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private moviesData: MoviesDataService
  ) {}
}
