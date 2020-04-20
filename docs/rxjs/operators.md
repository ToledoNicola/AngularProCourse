# Operators

esistono due tipi principali di operatori:

### Di creazione 

é una funzione che ritorna  un observable da qualcos'altro 

### Pipeable 

è una funzione che riceve un observable e ritorna un' observable in modo da non modificare il primo si applicano all observer tramite il metodo `pipe()`

```typescript
ob$.pipe(
  op1(),
  op2(),
  op3(),
  op3(),
)
```

è possibile salvare il nuovo observable in una nuova variabile 

```typescript
const newOb$ = ob$.pipe(
  op1(),
  op2(),
  op3(),
  op3(),
)
newOb$.subscribe()
```

#### Catena di operatori

la catena di operatori esegue le stesse operazioni per ogni valore emesso dall' observable sorgente

quando ci sottoscriviamo a `newOb$` ci sottoscriviamo a cascata a tutti gli observable creati dagli operatori fino ad arrivare all' ob sorgente che iniziera ad emettere i valori che passeranno per tutti gli operatori fino ad arrivare all'ultimo observer \(creare grafico per spiegare meglio il concetto \)

comunque e sempre possibile sottoscriversi ad `ob$` e riceveremo i valori inalterati perche appunto non è stato modificato dagli operatori

## Higher-order Observables

### flattering operators

converting a higher-order Observable into an ordinary Observable.

### Concorrenza

se un' inner ob sta emettendo dei valori ed il source ob emette un valore cosa succede?

| operator | comportamento |
| :--- | :--- |
| mergeMap | sottoscrive il nuovo ob ed emette subito i valori, l'ordine non importa |
| switchMap | unsubscribe precedente e subscribe del nuovo ob |
| concatMap | crea una coda di ob aspetta che il primo completi per passare al successivo |
| exhaustMap | sottoscrive al nuovo ob se il precedente è completato altrimenti lo scarta |





