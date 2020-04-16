import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-playground",
  template: ` <app-input [formControl]="testo"></app-input> `,
  styleUrls: ["./playground.component.scss"],
})
export class PlaygroundComponent implements OnInit {
  testo = new FormControl(null);

  constructor() {}

  ngOnInit(): void {}
  /**
   * differenza tra pull & push
   */
  observable() {
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    });
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

  subject() {}
}
