# Store

RxJS powered state management for Angular apps, inspired by Redux.

* [Actions](https://ngrx.io/guide/store/actions) describe unique events that are dispatched from components and services.
* State changes are handled by pure functions called [reducers](https://ngrx.io/guide/store/reducers) that take the current state and the latest action to compute a new state.
* [Selectors](https://ngrx.io/guide/store/selectors) are pure functions used to select, derive and compose pieces of state.
* State is accessed with the [`Store`](https://ngrx.io/api/store/Store), an observable of state and an observer of actions.

```text
ng add @ngrx/store
```

## Come Funziona?

1. Lo **stato** della tua applicazione viene mantenuto in **memoria** . Il **negozio** è immutabile.
2. I **componenti** dell'applicazione possono iscriversi allo **store** e ottenere aggiornamenti automatici dello **stato** tramite i **selettori** .
3. **I selettori** consentono ai **componenti** di ottenere una **sezione** \(una parte\) dello **stato** dell'applicazione e anche di mutare lo stato con le funzioni del selettore.
4. **Le azioni** modificano lo stato del **negozio** utilizzando **riduttori** \(funzioni\) che consentono le modifiche mantenendole immutabili.
5. **I meta-riduttori \(non mostrati\)** sono hook in cui è possibile pre o post-elaborazione delle azioni prima che vengano invocate.
6. **Gli effetti si** verificano a seguito di **azioni** e possono anche creare **azioni** quando vengono chiamati. **La** responsabilità primaria degli **effetti** è quella di creare effetti collaterali asincroni \(come le chiamate di servizio alle API\), che alla fine generano altre **azioni** .

