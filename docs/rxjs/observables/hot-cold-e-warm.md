# Hot, Cold e Warm

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

A **cold observable \(default\)** has a subscription function which creates a producer each time it executes.

To understand what this looks like in practice, lets look at an example of a cold observable which wraps a Promise returned from the fetch api:

```typescript
const subscriptionFn = observer => {
  const responsePromise = fetch('someUrl'); //producer
  responsePromise.then((data) => { 
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

{% hint style="info" %}
è possibile trasformare un observable **cold** in **hot** utilizzando un [subject](../subject.md) che si comporta come man-in-the-middle oppure un [multicasting operator ](../operators/#multicasting-operators)
{% endhint %}

### Hot Observable <a id="hot-observable"></a>

A hot observable has a subscription function which closes over its producer. e se il 

To understand how this is different to the cold observable, lets look at an example of a hot observable which wraps a Promise returned from the fetch api:

```typescript
/*
 * The http request is made outside of the subscription function, 
 * and so it executes eagerly rather than lazily.
*/
const responsePromise = fetch('someUrl'); // Producer

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
Gli **hot** observable  di solito sono **multicast**, ma in casi rari potrebbero utilizzare un Producer che supporta solo una sottoscrizione alla volta, in quel caso sarebbe **unicast**, ma è sempre possibile trasformarlo in multicast utilizzando un [operatore multicast](../operators/#multicasting-operators) 
{% endhint %}

#### Trasformare Hot in Cold

Per trasformare un osservabile **Hot** in **Cold**, l'osservabile deve diventare il **Producer**. Nel seguente esempio, creiamo una fabbrica di ob che restituisce una nuovo ob per ogni abbonamento. In questo modo, ogni abbonato otterrà il proprio flusso indipendente

```typescript
const obsFactory = () => fromEvent(document, 'click').pipe(
  .map(event => ({ clientX: event.clientX, clientY: event.clientY }))
  );


const sub1 = obsFactory().subscribe(val => {
  console.log('Sub1:', val);
});

setTimeout(() => {
  console.log('Start sub2');
  const sub2 = obsFactory().subscribe(val => {
    console.log('Sub2:', val);
  });
}, 4000);
```

{% hint style="info" %}
ancora il source ob rimane hot ma in questo modo andiamo a cambiare il comportamento perché inizia ad emettere i dati ad ogni subscribe, comportamento cold
{% endhint %}

### Warm Observable

where data starts being emitted only after the 1st subscription, but where the data is still shared between multiple observables. '**warm**' \(operatore [refCount](../operators/#refcount) e share\)

