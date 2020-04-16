import { Component, OnInit } from "@angular/core";
import { fromEvent, merge, BehaviorSubject } from "rxjs";
import { mapTo } from "rxjs/operators";

@Component({
  selector: "app-subject-store",
  template: `
    <button id="increment">incrementa</button>
    <button id="decrement">decrementa</button>
  `,
  styleUrls: ["./subject-store.component.scss"],
})
export class SubjectStoreComponent implements OnInit {
  constructor() {}

  createStore(initialState) {
    const state$ = new BehaviorSubject(initialState);

    function increment() {
      state$.next(state$.getValue() + 1);
    }

    function decrement() {
      state$.next(state$.getValue() - 1);
    }

    return {
      getState: () => state$.asObservable(),
      increment: () => increment(),
      decrement: () => decrement(),
    };
  }
  ngOnInit(): void {
    const store = this.createStore(0);

    store.getState().subscribe(console.log);

    merge(
      fromEvent(document.querySelector("#decrement"), "click").pipe(
        mapTo(false)
      ),
      fromEvent(document.querySelector("#increment"), "click").pipe(mapTo(true))
    ).subscribe((v) => {
      if (v) {
        store.increment();
      } else {
        store.decrement();
      }
    });
  }
}
