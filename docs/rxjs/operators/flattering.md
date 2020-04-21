# Flattering

## Higher-order Observables

Observables most commonly emit ordinary values like strings and numbers, but surprisingly often, it is necessary to handle **Observables** _**of**_ **Observables**

### flattering operators

converting a higher-order Observable into an ordinary Observable.

### Concorrenza

se un' inner ob sta emettendo dei valori e l' outer ob emette un valore cosa succede?

| operator | comportamento |
| :--- | :--- |
| **mergeMap** | sottoscrive il nuovo ob ed emette subito i valori, l'ordine non importa |
| **switchMap** | unsubscribe precedente e subscribe del nuovo ob |
| **concatMap** | crea una coda di ob aspetta che il primo completi per passare al successivo |
| **exhaustMap** | sottoscrive al nuovo ob se il precedente è completato altrimenti lo scarta |

## 

