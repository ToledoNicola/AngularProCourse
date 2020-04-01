import { Component, OnInit } from "@angular/core";
import { Observable, of } from "../../rxjs-fake";
import { map } from "../../rxjs-fake/operators";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-search",
  template: `
    <!-- <app-input-text></app-input-text> -->
    <app-input [formControl]="testo"></app-input>
  `,
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  testo = new FormControl("fofoffo");
  // ob$ = of(1, 2, 3, 4, 5);
  constructor() {}

  ngOnInit() {
    this.testo.valueChanges.subscribe(console.log);
    // this.ob$.subscribe(console.log);
    // setTimeout(() => {
    //   this.ob$.subscribe(console.log);
    // }, 2000);
    // this.ob$.subscribe({ next: console.log });

    // let myOb$ = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(29);
    //   }, 2000);
    // });
    // myOb$.subscribe({ next: console.log });
    // myOb$.pipe(map(value => value + 1)).subscribe({ next: console.log });
  }

  /**
   * diverse visibilita del contesto con il this
   * arrow function porta con se in automatico il this del padre
   * la function classica va fatto in modo esplicito con il .bind(this)
   */
  // rosso = "case";
  // arrowFunction = () => {
  //   // riesco a vedere rosso dentro this
  //   console.log(this.rosso);
  // };
  // classicFunction = function name() {
  //   console.log(this.rosso);
  // }.bind(this)();
}
