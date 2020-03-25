import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import { CalculatorActions } from "../../store/actions";
import { Observable } from "rxjs";
import { selectResult } from "../../store/selectors/calculator.selectors";

@Component({
  selector: "app-calculator",
  template: `
    <app-calculator-keypad
      (selectedNumber)="number($event)"
      (onReset)="reset()"
      [result]="result$ | async"
    ></app-calculator-keypad>
  `,
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent implements OnInit {
  result$: Observable<number>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.result$ = this.store.select(selectResult);
  }

  number(number: number) {
    this.store.dispatch(CalculatorActions.enteredNumber({ number }));
  }
  reset() {
    this.store.dispatch(CalculatorActions.reset());
  }
}
