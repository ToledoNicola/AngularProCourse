import { Component, OnInit } from "@angular/core";
import {
  fromEvent,
  merge,
  Subject,
  ConnectableObservable,
  Observable,
} from "rxjs";
import { publish, scan, mapTo } from "rxjs/operators";

@Component({
  selector: "app-scan-store",
  template: `
    <p>
      scan-store works!
    </p>
  `,
  styleUrls: ["./scan-store.component.scss"],
})
export class ScanStoreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /**
     * Boilerplate
     */
    const actions$ = new Subject();

    const createStore = (reducer, initialState) => {
      const store$ = actions$.pipe(
        scan(reducer, initialState),
        publish() // transformo in multicasting
      ) as ConnectableObservable<any>;

      store$.connect();

      return store$;
    };

    /**
     * Creazione dello store
     */

    const initialState = {
      counter: 0,
    };

    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case "increment":
          return { counter: state.counter + 1 };
        case "decrement":
          return { counter: state.counter - 1 };
      }
      return state;
    };

    const store$ = createStore(reducer, initialState);

    /**
     * Utilizzo
     */
    store$.subscribe(console.log);

    merge(
      fromEvent(document.querySelector("#decrement"), "click").pipe(
        mapTo(false)
      ),
      fromEvent(document.querySelector("#increment"), "click").pipe(mapTo(true))
    ).subscribe((v) => {
      actions$.next(v ? { type: "increment" } : { type: "decrement" });
    });
  }
}
