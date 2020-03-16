import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Todo } from "../models/todo";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { AngularFirestore } from "@angular/fire/firestore";
import "firebase/firestore"; // obbligatorio per usare AngularFirestore

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
        map(snap => snap.docs.map(doc => ({ ...doc.data() } as Todo))) // l'id è nel documento
        // map(snap => snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Todo))) // se il documento non ha l'id allora devo recuperarlo dal metadata
      );
  }
  add(data: Partial<Todo>) {
    debugger;
    const id = this.db.createId();
    const todo = createTodo(id, data);
    this.db.doc("todos/" + id).set(todo);
    return of(todo);
  }
}
