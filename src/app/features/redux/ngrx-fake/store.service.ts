import { Injectable, Inject } from "@angular/core";
import { ReducerMap, Action } from "./models";
import { ReducersStore } from "./tokens";

@Injectable()
export class StoreService<T> {
  private subscribers: Function[];
  // private reducers: ReducerMap<T>;
  private reducers;
  private state: T | {};

  constructor(@Inject(ReducersStore) reducers) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce({}, {}); // inizializza lo state dello store eseguendo tutti i reducer con il loro initial state
  }

  public get value() {
    return this.state as T;
  }

  dispatch(action: Action) {
    this.state = this.reduce(this.state, action);
    // richiamo tutti i sottoscritti passando il nuovo stato
    for (const fn of this.subscribers) {
      fn(this.value);
    }
  }

  private reduce(state, action: Action | {}) {
    const newState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }

  subscribe(fn: (state: T) => void) {
    this.subscribers = [...this.subscribers, fn];
    console.log("Array di funzioni subscribe", this.subscribers); // per controllare il totale dei subscribers e l'importanza di fare l'unsubscribe quando si esce dal componente
    fn(this.value); // eseguo la funzione
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn);
    };
  }
}
