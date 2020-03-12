import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Todo } from "../models/todo";
import { AngularFirestore } from "@angular/fire/firestore/firestore";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";

function createTodo(id: string, entity: Partial<Todo>): Todo {
  return {
    id,
    description: entity.description,
    isDone: false
  };
}

@Injectable()
export class TodosDataService extends DefaultDataService<Todo> {
  constructor(
    private db: AngularFirestore,
    http: HttpClient,
    httpurlgen: HttpUrlGenerator
  ) {
    super("Todo", http, httpurlgen);
  }
  getAll(): Observable<Todo[]> {
    return this.db
      .collection("todos")
      .get()
      .pipe(
        map(snap => snap.docs.map(doc => ({ id: doc.id, ...doc.data } as Todo)))
      );
  }
  add(data: Partial<Todo>) {
    const id = this.db.createId();
    const todo = createTodo(id, data);
    this.db.collection("todos").add(todo);
    return of(todo);
  }
}
