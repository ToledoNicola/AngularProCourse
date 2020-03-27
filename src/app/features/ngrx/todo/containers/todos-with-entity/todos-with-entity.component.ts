import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import { loadTodos } from "../../store/actions/todo.actions";

@Component({
  selector: "app-todos-with-entity",
  template: ``,
  styles: []
})
export class TodosWithEntityComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.store.dispatch(loadTodos());
  }
}
