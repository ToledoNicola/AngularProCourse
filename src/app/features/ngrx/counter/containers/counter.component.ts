import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectNumber } from "../store/counter.selectors";
import { increment, decrement, reset } from "../store/counter.actions";

@Component({
  selector: "app-counter",
  template: `
    <h1>
      {{ number$ | async }}
    </h1>
    <div class="buttons">
      <button (click)="decrement()"><h2>-</h2></button>
      <button (click)="increment()"><h2>+</h2></button>
    </div>
    <div class="buttons">
      <button (click)="reset()"><h2>reset</h2></button>
    </div>
  `,
  styleUrls: ["./counter.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  number$: Observable<number> = this.store.select(selectNumber);
  constructor(private store: Store<any>) {}

  ngOnInit() {}

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
