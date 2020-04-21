import { Subject, ConnectableObservable } from "rxjs";
import * as fromObservable from "./observable";
import { multicast } from "rxjs/operators";
import { observer } from "../conole";
/**
 * hot observable
 */
export const hot_Observable = () => {
  const subject = new Subject();
  subject.next(1);
  subject.next(2);
  subject.next(3);
  // subject.complete();
  return subject;
};

export const cold_To_Hot_Observable_subject = () => {
  const subject = new Subject();
  // questi riceveranno lo stesso valore  dopo che
  subject.subscribe();
  subject.subscribe();
  // avvio l'esecuzione dell'oservabile ed il subject inviera i dati a tutti i sottoscritti
  fromObservable.cold_Observable().subscribe(subject);
  //  questo non ricevera niente perche si trova dopo che l'observer subject ha emesso i dati
  subject.subscribe();
};

/**
 * hot observable
 * multicast issue
 * https://stackoverflow.com/questions/54265143/property-connect-does-not-exist-on-type-observableany-rxjs-multicast
 */
export const cold_To_Hot_Observable_multicast = () => {
  const subject = new Subject();

  const ob$ = fromObservable
    .cold_Observable()
    .pipe(multicast(subject)) as ConnectableObservable<number>; //workaround perche pipe ritorna observable invece di ConnectableObservable

  //riceve valori
  ob$.subscribe(observer);

  // avvie emissione dei dati come in quello precedente qundo facevamo ob$.subscibe()
  ob$.connect();

  // non riceve niente
  ob$.subscribe(observer);
};
