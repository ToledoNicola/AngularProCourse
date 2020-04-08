import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../store/reducers/movies.reducer";
import {
  selectMovies,
  selectIsLoaded,
  selectIsLoading,
} from "../store/selectors/movies.selectors";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";
import { map, tap } from "rxjs/operators";
import { loadMoreMovies } from "../store/actions/movies.actions";
import * as fromRoot from "src/app/store";

@Component({
  selector: "app-list",
  template: `
    <ng-container *ngIf="isLoaded$ | async; else elseTemplate">
      <app-movie-list [movies]="movies$ | async"></app-movie-list>
      <button (click)="loadMore()"><h2>Carica altro</h2></button>
    </ng-container>
    <ng-template #elseTemplate>
      <h1>loading...</h1>
    </ng-template>
    <!-- <h1 *ngIf="currentRoute$ | async"></h1> -->
  `,
  styles: [
    `
      :host {
        display: grid;
        width: 80%;
        justify-items: center;
        background-color: white;
        border-radius: 10px;
      }
      button {
        display: block;
        width: 100%;
        padding: 1rem;
        background-color: #00bcd473;
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
        border: none;
        cursor: pointer;
      }
    `,
  ],
})
export class ListComponent implements OnInit {
  // currentRoute$ = this.store
  //   .select(fromRoot.selectRouteParam("movieList"))
  //   .pipe(tap(console.log));
  movies$: Observable<Movie[]> = this.store.select(selectMovies);
  isLoaded$: Observable<boolean> = this.store.select(selectIsLoaded);
  constructor(private store: Store<any>) {}

  ngOnInit() {}

  loadMore() {
    this.store.dispatch(loadMoreMovies());
  }
}
