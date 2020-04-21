import { pipe, ConnectableObservable } from "rxjs";
import { map, take, publish, share } from "rxjs/operators";

export const pipe_esempioInput1 = () =>
  pipe(
    map(() => {
      throw "noooo";
    }),
    // filter((val) => val == "ambruccia"),
    // switchMap(() => throwError("ambruccia non mi vuole bene 😢")),
    take(5)
  );

/**
 * a mano dobbiamo gestire inizio e unsubscibe
 */
export const cold_to_Hot_publish = () =>
  pipe(
    publish(),
    map((conob) => conob as ConnectableObservable<any>) // workaround per il problema del tipo di ritorno
  );
/**
 * dopo il complete i nuovi subscibe rieseguono il source ob
 */
export const cold_to_Hot_share = () => pipe(share());
