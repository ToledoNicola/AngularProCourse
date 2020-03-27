import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, concatMap } from "rxjs/operators";
import { EMPTY, of } from "rxjs";

import * as TodoActions from "../actions/todo.actions";
import { TodosDataService } from "../../data/todos-data.service";

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      concatMap(() =>
        this.todoData.getAll().pipe(
          map(data => TodoActions.loadTodosSuccess({ data })),
          catchError(error => {
            return of(TodoActions.loadTodosFailure({ error }));
          })
        )
      )
    );
  });

  constructor(private actions$: Actions, private todoData: TodosDataService) {}
}
