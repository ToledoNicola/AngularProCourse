import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-tot-todos",
  template: `
    <h3>Totale todo</h3>
    <h1 *ngIf="totTodos$ | async as tot">{{ tot }}</h1>
  `,
  styleUrls: ["./tot-todos.component.scss"]
})
export class TotTodosComponent implements OnInit {
  totTodos$: Observable<number>;
  constructor(private todoService: TodoService) {
    this.totTodos$ = todoService.entities$.pipe(map(ents => ents.length));
  }

  ngOnInit() {}
}
