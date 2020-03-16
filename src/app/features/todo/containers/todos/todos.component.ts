import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TodoService } from "../../services/todo.service";
import { Observable } from "rxjs";
import { Todo } from "../../models/todo";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-todos",
  template: `
    <ng-container *ngIf="isLoaded$ | async; else elseTemplate">
      <app-todos-list [todos]="todos$ | async"> </app-todos-list>
    </ng-container>
    <ng-template #elseTemplate>
      <h1>loading...</h1>
    </ng-template>

    <app-new-todo (newTodo)="addTodo($event)"> </app-new-todo>
  `,
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;
  isLoaded$: Observable<boolean>;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos$ = this.todoService.entities$.pipe(tap(console.log));
    this.isLoaded$ = this.todoService.loaded$.pipe(
      tap(loaded => {
        if (!loaded) {
          // recupero i todo dal db, lo faccio qui invece di farlo nel resolver per caricare intanto la pagina e poi tutti i pezzi si caricheranno
          this.todoService.getAll();
        }
      })
    );
  }

  addTodo(data) {
    this.todoService.add(data);
  }
}
