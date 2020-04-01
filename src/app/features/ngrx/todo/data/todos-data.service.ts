import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Todo } from "../models/todo";
import { HttpClient } from "@angular/common/http";
import { map, tap, catchError } from "rxjs/operators";
import { Observable, of, throwError } from "rxjs";

import { AngularFirestore } from "@angular/fire/firestore";
import "firebase/firestore"; // obbligatorio per usare AngularFirestore
import { FirebaseError } from "firebase";

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
        map(snap => snap.docs.map(doc => ({ ...doc.data() } as Todo))), // l'id è nel documento
        // map(snap => snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Todo))) // se il documento non ha l'id allora devo recuperarlo dal metadata
        catchError((error: FirebaseError) => {
          return throwError({ error: error.message }); //TODO! non funziona DATA non recupera l'errore
        })
      );
  }
  add(data: Partial<Todo>) {
    const id = this.db.createId();
    const todo = createTodo(id, data);
    this.db.doc("todos/" + id).set(todo);
    return of(todo);
  }

  delete(id: string) {
    this.db.doc("todos/" + id).delete();
    return of(id);
  }
}
