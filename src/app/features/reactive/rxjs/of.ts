import { Observable } from "./observable";

export function of(...params) {
  return new Observable(observer => {
    params.forEach(value => {
      observer.next(value);
    });
  });
}
