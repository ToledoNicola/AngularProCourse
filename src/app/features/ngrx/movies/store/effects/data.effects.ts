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
  exhaustMap,
} from "rxjs/operators";
import { EMPTY, of } from "rxjs";

import * as DataActions from "../actions/data.actions";
import { MoviesDataService } from "../../services/movies-data.service";
import { Store } from "@ngrx/store";
import * as fromRoot from "src/app/store";
import { ROUTER_NAVIGATION } from "@ngrx/router-store";
import * as UISelectors from "../selectors/ui.selectors";
import * as DataSelectors from "../selectors/data.selectors";

@Injectable()
export class DataEffects {
  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DataActions.loadMovies),
      withLatestFrom(
        this.store.select(DataSelectors.selectIsLoaded),
        (_, hasLoaded) => hasLoaded
      ),
      filter((hasLoaded) => !hasLoaded),
      withLatestFrom(
        this.store.select(UISelectors.selectListType),
        (_, movieList) => movieList
      ),
      // tap(console.log),
      switchMap((movieList) =>
        this.moviesData.getMovies(movieList).pipe(
          map((data) => DataActions.loadMoviesSuccess({ data })),
          catchError((error) => of(DataActions.loadMoviesFailure({ error })))
        )
      )
    );
  });

  loadMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DataActions.getMovie),
      withLatestFrom(
        this.store.select(DataSelectors.selectMovie),
        (_, movie) => !!movie
      ),
      filter((hasMovie) => !hasMovie),
      withLatestFrom(
        this.store.select(fromRoot.selectRouteParam("movieId")),
        (_, movieId) => movieId
      ),
      switchMap((movieId) =>
        this.moviesData.getMovie(movieId).pipe(
          map((movie) => DataActions.loadMovieSuccess({ movie })),
          catchError((error) => of(DataActions.loadMovieFailure({ error })))
        )
      )
    );
  });

  loadMoreMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DataActions.loadMoreMovies),
      withLatestFrom(
        this.store.select(UISelectors.selectListType),
        this.store.select(DataSelectors.selectNextPage)
      ),
      // tap(console.log),
      //sostituire con concatMap,exhaustMap,  per far medere la differenza se uno fa piu dispatch di questa azione
      exhaustMap(([_, movieList, nextPage]) =>
        this.moviesData.getMovies(movieList, nextPage).pipe(
          map((data) => DataActions.loadMoreMoviesSuccess({ data })),
          catchError((error) => of(DataActions.loadMoviesFailure({ error })))
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
      map((_) => DataActions.loadMovies())
    );
  });

  constructor(
    private actions$: Actions,
    private moviesData: MoviesDataService,
    private store: Store<fromRoot.AppState>
  ) {}
}
