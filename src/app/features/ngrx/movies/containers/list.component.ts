import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../store/reducers/movies.reducer";
import {
  selectMovies,
  selectIsLoaded,
  selectIsLoading
} from "../store/selectors/movies.selectors";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";
import { map, tap } from "rxjs/operators";
import { loadMovies } from "../store/actions/movies.actions";
import * as fromRoot from "src/app/store";

@Component({
  selector: "app-list",
  template: `
    <ng-container *ngIf="isLoading$ | async; else elseTemplate">
      <h1>loading...</h1>
    </ng-container>
    <ng-template #elseTemplate>
      <app-movie-list [movies]="movies$ | async"></app-movie-list>
    </ng-template>
    <!-- <h1 *ngIf="currentRoute$ | async"></h1> -->
  `,
  styles: [
    `
      :host {
        display: grid;
        height: 100%;
        width: 100%;
        justify-items: center;
        padding: 0 3rem 2rem 3rem;
      }
    `
  ]
})
export class ListComponent implements OnInit {
  // currentRoute$ = this.store
  //   .select(fromRoot.selectRouteParam("movieList"))
  //   .pipe(tap(console.log));
  movies$: Observable<Movie[]> = this.store.select(selectMovies);
  isLoading$: Observable<boolean> = this.store.select(selectIsLoading);
  constructor(private store: Store<any>) {}

  ngOnInit() {}
}
