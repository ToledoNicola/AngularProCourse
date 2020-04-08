import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  catchError,
  map,
  concatMap,
  switchMap,
  withLatestFrom,
  tap,
  filter,
} from "rxjs/operators";
import { EMPTY, of } from "rxjs";

import * as MoviesActions from "../actions/movies.actions";
import { MoviesDataService } from "../../services/movies-data.service";
import { Store } from "@ngrx/store";
import * as fromRoot from "src/app/store";
import { ROUTER_NAVIGATION, RouterNavigationAction } from "@ngrx/router-store";
import { selectNextPage } from "../selectors/movies.selectors";

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      withLatestFrom(this.store.select(fromRoot.selectRouteParam("movieList"))),
      // tap(console.log),
      switchMap(([_, movieList]) =>
        this.moviesData.getMovies(movieList).pipe(
          map((data) => MoviesActions.loadMoviesSuccess({ data })),
          catchError((error) => of(MoviesActions.loadMoviesFailure({ error })))
        )
      )
    );
  });
  loadMoreMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.loadMoreMovies),
      withLatestFrom(
        this.store.select(fromRoot.selectRouteParam("movieList")),
        this.store.select(selectNextPage)
      ),
      // tap(console.log),
      switchMap(([_, movieList, nextPage]) =>
        this.moviesData.getMovies(movieList, nextPage).pipe(
          map((data) => MoviesActions.loadMoreMoviesSuccess({ data })),
          catchError((error) => of(MoviesActions.loadMoviesFailure({ error })))
        )
      )
    );
  });
  loadMoviesList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      withLatestFrom(this.store.select(fromRoot.selectRouteParam("movieList"))),
      tap(console.log),
      filter(([_, movieList]) => !!movieList),
      map((_) => MoviesActions.loadMovies())
    );
  });

  constructor(
    private actions$: Actions,
    private moviesData: MoviesDataService,
    private store: Store<fromRoot.AppState>
  ) {}
}
