# Selectors

I selettori sono funzioni pure utilizzate per ottenere sezioni dello stato nello store

* Portability
* Memoization
* Composition
* Testability
* Type Safety

Poiché i selettori sono [funzioni pure](https://en.wikipedia.org/wiki/Pure_function) , è possibile restituire l'ultimo risultato quando gli argomenti corrispondono senza reinviare la funzione di selezione. Ciò può offrire vantaggi in termini di prestazioni, in particolare con selettori che eseguono calcoli costosi

## CreateSelectors\(\)

```typescript
import { createSelector } from '@ngrx/store';
 
export interface FeatureState {
  counter: number;
}
 
export interface AppState {
  feature: FeatureState;
}
 
export const selectFeature = (state: AppState) => state.feature;
 
export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.counter
);
```

è possibile combinare piu selettori fino ad un massimo di 8

## CreateFeatureSelector\(\)

gli passiamo il nome della chiave di stato che vogliamo selezionare 

returns a typed selector function for a feature slice of state.

```typescript
import { createSelector, createFeatureSelector } from '@ngrx/store';
 
export const featureKey = 'feature';
 
export interface FeatureState {
  counter: number;
}
 
export interface AppState {
  feature: FeatureState;
}
 
export const selectFeature = createFeatureSelector<AppState, FeatureState>(featureKey);
 
export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.counter
);
```



{% hint style="warning" %}
attenzione a non selezionare tutto lo stato perche potrebbe causare problemi di loop
{% endhint %}

### memoization

hanno un valore memoizato di default `null`  e quando gli argomenti cambiano vengono ricalcolati altrimenti rimane lo stesso valore di return

```typescript
import { createSelector } from '@ngrx/store';

export interface State {
  counter1: number;
  counter2: number;
}

export const selectCounter1 = (state: State) => state.counter1;
export const selectCounter2 = (state: State) => state.counter2;
export const selectTotal = createSelector(
  selectCounter1,
  selectCounter2,
  (counter1, counter2) => counter1 + counter2
); // selectTotal has a memoized value of null, because it has not yet been invoked.

let state = { counter1: 3, counter2: 4 };

selectTotal(state); // computes the sum of 3 & 4, returning 7. selectTotal now has a memoized value of 7
selectTotal(state); // does not compute the sum of 3 & 4. selectTotal instead returns the memoized value of 7

state = { ...state, counter2: 5 };

selectTotal(state); // computes the sum of 3 & 5, returning 8. selectTotal now has a memoized value of 8
```

per resettare il valore memoizated a null

```typescript
selectTotal(state); // returns the memoized value of 8
selectTotal.release(); // memoized value of selectTotal is now null
```



