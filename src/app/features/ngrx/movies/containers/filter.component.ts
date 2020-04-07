import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import { searchMovie } from "../store/actions/movies.actions";
import { selectFileterName } from "../store/selectors/movies.selectors";

@Component({
  selector: "app-filter",
  template: `
    <app-title-filter
      (onSearch)="handleSearch($event)"
      [value]="titleFilter$ | async"
    ></app-title-filter>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class FilterComponent implements OnInit {
  titleFilter$ = this.store.select(selectFileterName);
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  handleSearch(title: string) {
    this.store.dispatch(searchMovie({ title }));
  }
}
