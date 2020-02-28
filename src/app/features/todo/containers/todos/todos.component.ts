import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-todos",
  template: `
    <app-new-todo> </app-new-todo>
    <app-todos-list> </app-todos-list>
  `,
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {}
}
