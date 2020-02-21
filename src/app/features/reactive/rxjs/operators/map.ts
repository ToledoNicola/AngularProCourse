import { Observable } from "../observable";

export function map(fn) {
  return (source: Observable) => {
    return new Observable(observer => {
      return source.subscribe({
        next: value => observer.next(fn(value))
      });
    });
  };
}
