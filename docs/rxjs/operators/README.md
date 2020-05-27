# ⛓Operators

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

quando ci sottoscriviamo a `newOb$` ci sottoscriviamo a cascata a tutti gli observable creati dagli operatori fino ad arrivare all' ob sorgente che iniziera ad emettere i valori che passeranno per tutti gli operatori fino ad arrivare all'ultimo observer \(todo : creare grafico per spiegare meglio il concetto \)

comunque e sempre possibile sottoscriversi ad `ob$` e riceveremo i valori inalterati perche appunto non è stato modificato dagli operatori

## 



