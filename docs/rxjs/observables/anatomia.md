# Anatomia

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

