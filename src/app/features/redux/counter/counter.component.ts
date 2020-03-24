import { Component, OnInit } from "@angular/core";
import { StoreService } from "../ngrx-fake/store.service";
import { AppState } from "src/app/store-fake";

@Component({
  selector: "app-counter",
  template: `
    <h1>
      {{ number }}
    </h1>
    <div class="buttons">
      <button (click)="decrement()"><h2>-</h2></button>
      <button (click)="increment()"><h2>+</h2></button>
    </div>
    <div class="buttons">
      <button (click)="reset()"><h2>reset</h2></button>
    </div>
  `,
  styleUrls: ["./counter.component.scss"]
})
export class CounterComponent implements OnInit {
  number;

  unsubscribe;
  constructor(public storeFake: StoreService<AppState>) {}

  ngOnInit() {
    this.unsubscribe = this.storeFake.subscribe(state => {
      this.number = state.counter.number;
    });
  }

  increment() {
    this.storeFake.dispatch({ type: "INCREMENT" });
  }
  decrement() {
    this.storeFake.dispatch({ type: "DECREMENT" });
  }
  reset() {
    this.storeFake.dispatch({ type: "RESET" });
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }
}
