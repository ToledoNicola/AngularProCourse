import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../models/todo";

@Component({
  selector: "app-todos-list",
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        <h3>
          <span class="delete" (click)="delete.emit(todo)"> X </span>
          {{ todo.description }}
        </h3>
        <input type="checkbox" [checked]="todo.isDone" />
      </li>
    </ul>
  `,
  styleUrls: ["./todos-list.component.scss"]
})
export class TodosListComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() delete = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
