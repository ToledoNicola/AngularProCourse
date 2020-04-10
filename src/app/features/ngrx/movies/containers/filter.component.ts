import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import * as UIActions from "../store/actions/ui.actions";
import * as DataActions from "../store/actions/data.actions";
import * as UiSelectors from "../store/selectors/ui.selectors";

@Component({
  selector: "app-filter",
  template: `
    <app-title-filter
      (onSearch)="handleSearch($event)"
      [value]="titleFilter$ | async"
    ></app-title-filter>
    <app-select-list
      [active]="listType$ | async"
      (changeFilter)="handleChangeFilter($event)"
    ></app-select-list>
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
  titleFilter$ = this.store.select(UiSelectors.selectSearchTitle);
  listType$ = this.store.select(UiSelectors.selectListType);
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  handleSearch(title: string) {
    this.store.dispatch(UIActions.searchMovie({ title }));
  }
  handleChangeFilter(list) {
    this.store.dispatch(UIActions.listMovie({ list }));
    this.store.dispatch(DataActions.loadMovies());
  }
}
