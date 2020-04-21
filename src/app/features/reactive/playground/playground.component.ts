import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { observer } from "../conole";
import * as fromObservable from "./observable";
import * as fromSubject from "./subject";
import * as fromPipe from "./operators";

@Component({
  selector: "app-playground",
  template: ` <app-input [formControl]="testo"></app-input> `,
  styleUrls: ["./playground.component.scss"],
})
export class PlaygroundComponent implements OnInit {
  testo = new FormControl(null);

  constructor() {}

  ngOnInit(): void {
    console.clear();

    this.observable();
    // this.input()
    // this.subject();
  }

  input() {
    this.testo.valueChanges
      .pipe(fromPipe.pipe_esempioInput1())
      .subscribe(observer);
  }
  /**
   * differenza tra pull & push
   */
  observable() {
    const observable = fromObservable.cold_Observable();
    observable.subscribe(observer("A"));
    observable.subscribe(observer("B"));
  }
  Creation_Operators() {}

  Join_Creation_Operators() {}

  Transformation_Operators() {}

  Filtering_Operators() {}
  /**
   * Higher-order Observables quando un'observable A emette obserbale B
   * con questi operatori fanno il subscribe dell'observable B
   * e restituiscono il risultato
   */
  Flattening_Operators() {}

  MultiCasting_Operators() {}

  Error_Handling_Operators() {}

  subject() {
    const subject = fromSubject.hot_Observable();
    subject.subscribe(observer("A"));
    subject.next(10);
    subject.subscribe(observer("B"));
  }
}
