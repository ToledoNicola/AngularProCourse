# Reducers

Ogni funzione di reducer è un ascoltatore di Action

La responsabilità della funzione reducer è di gestire le transizioni di stato in modo immutabile

## CreateReducer\(\)

rendono il codice piu leggibile sostituendo lo switch, che si usava nelle vecchie versioni

```typescript
const featureReducer = createReducer(
  initialState,
  on(
    featureActions.actionOne,
    featureActions.actionTwo,
    (state, { updatedValue }) => ({ ...state, prop: updatedValue })
  ),
  on(featureActions.actionThree, () => initialState);
);
 
export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
```

 le transizioni di stato non stanno modificando lo stato originale, ma stanno restituendo un nuovo oggetto stato utilizzando l'operatore spread.

{% hint style="info" %}
lo **spread operator** esegue solo copie poco profonde e non gestisce oggetti profondamente annidati. È necessario copiare ogni livello nell'oggetto per garantire l'immutabilità. Ci sono librerie che gestiscono copie profonde tra cui [lodash](https://lodash.com/) e [immer](https://github.com/mweststrate/immer) .
{% endhint %}

## Registrare un root state

```typescript
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromScoreboard from './reducers/scoreboard.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({ game: fromScoreboard.reducer })
  ],
})
export class AppModule {}
```

## Registrare un feature state

lasciamo il root state vuoto

```typescript
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    StoreModule.forRoot({})
  ],
})
export class AppModule {}
```

e  lo definiamo nel feature module



