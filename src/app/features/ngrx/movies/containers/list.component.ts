import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../store/reducers/data.reducer";
import {
  selectMovies,
  selectIsLoaded,
  selectIsLoading,
} from "../store/selectors/data.selectors";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";
import { map, tap } from "rxjs/operators";
import {
  loadMoreMovies,
  loadMovies,
  detailsMovie,
} from "../store/actions/data.actions";
import * as fromRoot from "src/app/store";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  template: `
    <ng-container *ngIf="isLoaded$ | async; else elseTemplate">
      <app-movie-list
        [movies]="movies$ | async"
        (selected)="details($event)"
      ></app-movie-list>
      <button (click)="loadMore()"><h2>Carica altro</h2></button>
    </ng-container>
    <ng-template #elseTemplate>
      <h1>loading...</h1>
    </ng-template>
  `,
  styles: [
    `
      :host {
        display: grid;
        width: 47%;
        height: 442px;
        overflow: scroll;
        place-items: center;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 3px 0 rgba(84, 94, 111, 0.2);
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
  movies$: Observable<Movie[]> = this.store.select(selectMovies);
  isLoaded$: Observable<boolean> = this.store.select(selectIsLoaded);
  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(loadMovies());
  }

  loadMore() {
    this.store.dispatch(loadMoreMovies());
  }
  details(id) {
    this.store.dispatch(detailsMovie({ id }));
    // this.router.navigateByUrl("/dashboard/ngrx/movies/" + id);
  }
}
