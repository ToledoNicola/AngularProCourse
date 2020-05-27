# Tips

## Input FormControl valueChange

se si utilizza il valueChange per emettere il nuovo valore fare attenzione quando andiamo a settare il valore\( se lo recuperiamo dallo store \) perche andrebbe a scatenare un nuovo valore e quindi un loop di actions è importante settare nelle configurazioni  :

```typescript
this.testo.setValue(value, { emitEvent: false });
```

in questo modo non scatena l'evento nel valueChange ed il timetravel sul redux dev tools funziona

## Don't load if we've already loaded.

```typescript
@Effect()
loadOrdersRequested$ = this.actions$.pipe(
  ofType<LoadOrdersRequested>(ActionTypes.LoadOrdersRequested),
  // Don't load if we've already loaded.
  withLatestFrom(this.store.select(getAllOrdersLoaded)),
  filter(([_, loaded]) => !loaded),
  // Don't handle more than one load request at a time.
  exhaustMap(() => this.ordersService.fetchAllOrders().pipe(
    map(result => new LoadOrders(result))
  ))
);
```

preferisco eseguire il controllo nell'Effect per farlo una volta invece che nel container

## Fetch dati

[https://dev.to/jonrimmer/where-to-initiate-data-load-in-ngrx-358l](https://dev.to/jonrimmer/where-to-initiate-data-load-in-ngrx-358l)

possiamo eseguire il dispatch per il fetch dei dati da:

* Guard
* Resolver
* Component Container/Smart
* Component Root
* init Effects lifecycle

come decidere da dove fare il dispatch ?

dipende da **quando** ci servono i dati 

1. When the app starts.
2. When a container component is initialised.
3. When the app navigates to a route.
4. When the user performs an action.
5. Quando viene caricato un feature module

servono solo ad uno specifico container? allora **Container**

servono ad una rotta specifica?  **Guard** \(la preferisco invece del Resolver\)

servono ad un feature module? nel ngrxOnInitEffects

```typescript
class OrdersEffects implements OnInitEffects {
  ngrxOnInitEffects(): Action {
    return { type: '[Orders Effect]: Load' };
  }
}
```

## Architettura cartelle

le piu comuni sono 2

* a livello di root creare cartelle che conterra lo stato di tutta l'app, feature module etc.
* ogni feature module avra la sua cartella store che contiene i suoi file caricati in modo lazy

personalmente preferisco avere tutto nei moduli feature lazy o no per avere tutto piu organizzato

