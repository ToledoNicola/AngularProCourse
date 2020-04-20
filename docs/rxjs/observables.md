# Observables

l' **observable o stream** è nella pratica _solo una funzione_ \( la **subscription function** \) che lega l' **observer** ad un **producer**

{% hint style="info" %}
**producer:** è tutto ciò che stai usando per ottenere valori e passarli a `observer.next(value)`, chiamata http, ciclo su un array etc.
{% endhint %}

il producer all'interno dell'observable emette dei valori che l'observer recupera

ogni volta che un observer si sottoscrive all'observable riesegue la **subscription function**  \(in pratica l'observable\)

The observable can essentially do three things in terms of notifying its observers.

1. Emit a value - \(0, 1 or many times\)
2. Emit an error - \(0 or 1 times\)
3. Complete - \(0 or 1 times\)

Once an observable either errors or completes, it will unsubscribe all of its observers and can no longer emit values, error or complete. A consequence of this is that an observable will never both error and complete.

```typescript
const observer = {
    next: (value) => {},
    error: (error) => {},
    complete: () => {}
}
```

```typescript
import { Observable } from 'rxjs';

/*
 * A 'subscription' function, defining what action to take each time 
 * an observer subscribes. The function will be passed the 
 * subscribing observer as a parameter.
 *
 * IN PRATICA QUESTA FUNZIONE è IL NOSTRO OBSERVABLE
 * ED IN QUESTO CASO IL PRODUCER è LA FUNZIONE STESSA 
 */
const subscriptionFn = observer => {
  console.log('A new subscriber');
  observer.next(1);
  observer.next(2);
  observer.complete();
}

/*
 * Create a new observable, giving it a subscription function to 
 * execute whenever any Observer subscribes.
 */
const source$ = new Observable(subscriptionFn);

/*
 * An observer - simply an object with next, error and complete
 * methods.
 */
const observer = {
    next: value => console.log(value),
    error: error => console.log(`Error: ${error}`),
    complete: () => console.log('Complete'),
};

/*
 * We subscribe here, causing our observable to execute the 
 * subscription function we gave it earlier, with the observer 
 * we give it here as an argument.
 */
source$.subscribe(observer);
// A new subscriber
// 1
// 2

// We subscribe again, causing the subscription function to execute again.
source$.subscribe(observer);
// A new subscriber
// 1
// 2
```

## Hot and Cold Observables <a id="hot-and-cold-observables"></a>

la differenza sta nel momento in cui inizia a produrre i valori

* **Hot** quando inizia ad emettere i dati a prescindere del subscribe
* **Cold** quando inizia ad emettere i dati al momento dell subscribe

e nello specifico questi comportamenti sono possibili in base a dove viene creato  il **producer** \(data source\) 

se il **producer** viene creato all'interno dell'observable \(subscription function\) è **cold**

se l'observable utilizza la **reference** di un **producer** creato fuori dalla subscription function allora è **hot**

se vengono fatti entrambi è **warm**

### **Producer**

A **producer** as a source of values for an observable - ie. the thing which actually calls the observer’s `next`, `complete` and `error` methods.

The producer can either be the subscription function itself, or some source contained within or closed over by the subscription function \(eg. a sequence of DOM events, a http response, a connection to a web socket\).

### Cold Observable <a id="cold-observable"></a>

A **cold observable** has a subscription function which creates a producer each time it executes.

To understand what this looks like in practice, lets look at an example of a cold observable which wraps a Promise returned from the fetch api:

```typescript
const subscriptionFn = observer => {
  const responsePromise = fetch('someUrl'); 
  responsePromise.then((data) => { // il producer che chiama il next()
    observer.next(data);
    observer.complete();
  }, (err) => {
    observer.error(err);
  });
}

const source$ = new Observable(producer);

source$.subscribe(response => console.log(response));
source$.subscribe(response => console.log(response));
```

* We make 1 call to the fetch api and hence 1 http request per observer, when that observer subscribes \(lazy execution\).
* Values emitted by the observable are not shared between observers \(ie. ogni observer riceve una diversa`response` object\). An Observable which behaves in this way is known as **unicast**.

### Hot Observable <a id="hot-observable"></a>

A hot observable has a subscription function which closes over its producer.

To understand how this is different to the cold observable, lets look at an example of a hot observable which wraps a Promise returned from the fetch api:

```typescript
/*
 * The http request is made outside of the subscription function, 
 * and so it executes eagerly rather than lazily.
*/
const responsePromise = fetch('someUrl'); 

const subscriptionFn = observer => {
  responsePromise.then((data) => {
    observer.next(data); * 
    observer.complete();
  }, (err) => {
    observer.error(err);
  });
}

const source$ = Observable.create(subscriptionFn);

source$.subscribe(response => console.log(response));
source$.subscribe(response => console.log(response));
```

* We only make 1 call to the fetch api and hence 1 http request, before the observable is ever created \(eager execution\).
* Values emitted by the observable are shared between observers \(ie. each observer receives the same `response` object\). An observable which behaves this way is known as **multicast**.

{% hint style="info" %}
Gli **hot** observable  di solito sono **multicast**, ma in casi rari potrebbero ascoltare un producer che supporta solo una sottoscrizione alla volta, in quel caso sarebbe **unicast** perche ogni observer riceverebba valori diversi
{% endhint %}

### Warm Observable

where data starts being emitted only after the 1st subscription, but where the data is still shared between multiple observables. '**warm**'

