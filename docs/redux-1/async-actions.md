# Async Actions

Quando chiami un' API asincrona, ci sono due momenti importanti: 

* il momento in cui inizi la chiamata 
* il momento in cui ricevi una risposta \(o un timeout\).

Ognuno di questi due momenti di solito richiede un cambiamento nello stato dell'applicazione; per fare ciò, è necessario inviare le normali **action** che verranno elaborate dai **reducers** in modo sincrono

Di solito, per qualsiasi richiesta API è necessario inviare almeno tre diversi tipi di azioni:

* **Un'action che informa i reducers che la richiesta è iniziata.**
* **Un'action che informa i reducers che la richiesta è stata completata correttamente.**
* **Un'action che informa i reducers del fallimento della richiesta.**

```text
{ type: 'FETCH_POSTS_REQUEST' }
{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }
```

poi queste azioni verranno usate dai  [middleware Redux Thunk](https://github.com/gaearon/redux-thunk) che si occupano di affettuare la chiamata api ed il dispatch delle azioni

