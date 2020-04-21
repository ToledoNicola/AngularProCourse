import { Observable, Subject, pipe, of, ConnectableObservable } from "rxjs";
import { multicast, map, take } from "rxjs/operators";
import { observer } from "../conole";

/**
 * l'observable è cold vul dire che viene eseguito al momento del subscribe
 */
export const cold_Observable = () => {
  new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
  }).subscribe(observer("F"));
  // oppure
  return of(1, 2, 3);
};
