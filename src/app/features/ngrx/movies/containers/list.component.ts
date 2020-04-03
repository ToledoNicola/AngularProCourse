import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../store/reducers/movies.reducer";
import {
  selectMovies,
  selectIsLoaded
} from "../store/selectors/movies.selectors";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";
import { map, tap } from "rxjs/operators";
import { loadMovies } from "../store/actions/movies.actions";
import * as fromRoot from "src/app/store";

@Component({
  selector: "app-list",
  template: `
    <ng-container *ngIf="loaded$ | async; else elseTemplate">
      <app-movie-list [movies]="movies$ | async"></app-movie-list>
    </ng-container>
    <ng-template #elseTemplate>
      <h1>loading...</h1>
    </ng-template>
    <h1 *ngIf="currentRoute$ | async"></h1>
  `,
  styles: [``]
})
export class ListComponent implements OnInit {
  currentRoute$ = this.store
    .select(fromRoot.selectRouteParams)
    .pipe(tap(console.log));
  movies$: Observable<Movie[]> = this.store.select(selectMovies);
  loaded$: Observable<boolean> = this.store.select(selectIsLoaded).pipe(
    tap(isLoaded => {
      //carico i film solo se non li ho gia caricati
      if (!isLoaded) {
        this.store.dispatch(loadMovies());
      }
    })
  );
  constructor(private store: Store<any>) {}

  ngOnInit() {}
}
