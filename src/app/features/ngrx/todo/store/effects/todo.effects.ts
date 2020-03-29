import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, concatMap, tap } from "rxjs/operators";
import { of } from "rxjs";

import * as TodoActions from "../actions/todo.actions";
import { TodosDataService } from "../../data/todos-data.service";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      concatMap(() =>
        this.todoData.getAll().pipe(
          map(data => TodoActions.loadTodosSuccess({ data })),
          tap(() => this.toast.success("todo caricati con successo")),
          catchError(error => {
            return of(TodoActions.loadTodosFailure({ error }));
          })
        )
      )
    );
  });

  // saveNotification$ = createEffect(()=>{
  //   return this.actions$.pipe(
  //     ofType(TodoActions.loadTodosSuccess),
  //     tap(()=> this.toast.success('todo caricati con successo'))
  //   )
  // })

  constructor(
    private actions$: Actions,
    private todoData: TodosDataService,
    private toast: ToastrService
  ) {}
}
