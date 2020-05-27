# Store

RxJS powered state management for Angular apps, inspired by Redux.

* [Actions](https://ngrx.io/guide/store/actions) describe unique events that are dispatched from components and services.
* State changes are handled by pure functions called [reducers](https://ngrx.io/guide/store/reducers) that take the current state and the latest action to compute a new state.
* [Selectors](https://ngrx.io/guide/store/selectors) are pure functions used to select, derive and compose pieces of state.
* State is accessed with the [`Store`](https://ngrx.io/api/store/Store), an observable of state and an observer of actions.

```text
ng add @ngrx/store
```



