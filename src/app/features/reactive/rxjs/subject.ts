import { Observable, Observer } from "./observable";
export class Subject extends Observable {
  observers: Observer[];
  constructor() {
    super();
    this.observers = [];
  }
  next(value) {
    this.observers.forEach(ob => {
      ob.next(value);
    });
  }

  complete() {
    this.observers.forEach(ob => {
      ob.complete();
    });
  }
  error(value?) {
    this.observers.forEach(ob => {
      ob.error(value);
    });
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  asObservable() {
    return new Observable(observer => {
      this.subscribe({
        next(value) {
          observer.next(value);
        }
      });
    });
  }
}
