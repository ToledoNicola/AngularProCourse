import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "../../models/todo";

@Component({
  selector: "app-todos-list",
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        <h3>{{ todo.description }}</h3>
        <h2>{{ todo.isDone }}</h2>
      </li>
    </ul>
  `,
  styleUrls: ["./todos-list.component.scss"]
})
export class TodosListComponent implements OnInit {
  @Input() todos: Todo[];
  constructor() {}

  ngOnInit() {}
}
