# Entity

Entity fornisce un' API per manipolare e interrogare raccolte di entità.

* Riduce il boilerplate per la creazione di riduttori che gestiscono una collezione di modelli.
* Fornisce operazioni CRUD performanti per la gestione delle raccolte di entità.
* Adattatori di sicurezza estensibili per la selezione delle informazioni sull'entità.

```text
ng add @ngrx/entity
```

l'interfaccia EntityState

```typescript
interface EntityState<V> {
  ids: string[] | number[];
  entities: { [id: string | id: number]: V };
}
```

* `ids`: Una matrice di tutti gli ID primari nella raccolta
* `entities`: Un dizionario di entità nella raccolta indicizzato dall'ID principale

se abbiamo altre proprietà da aggiungere 

```typescript
export interface User {
  id: string;
  name: string;
}

export interface State extends EntityState<User> {
  // additional entity state properties
  selectedUserId: number | null;
}
```

### EntityAdapter &lt;T&gt; <a id="entityadaptert"></a>

L'adapter fornisce molti metodi di raccolta per la gestione dello stato dell'entità.

```typescript
export const adapter: EntityAdapter<User> = createEntityAdapter<User>();
```

Il metodo accetta un oggetto con 2 proprietà per la configurazione

* `selectId`: un metodo per selezionare l'id principale per la raccolta. Facoltativo quando l'entità ha `id` come chiave primaria 
* `sortComparer`: Una funzione di confronto per [ordinare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) la raccolta. La funzione di confronto è necessaria solo se la raccolta deve essere ordinata prima di essere visualizzata. Impostare su `false`per lasciare la raccolta non ordinata, che risulta più performante durante le operazioni CRUD.

```typescript
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface User {
  id: string;
  name: string;
}

export interface State extends EntityState<User> {
  // additional entities state properties
  selectedUserId: number;
}

export function selectUserId(a: User): string {
  //in questo caso è opzionale perche la chiave è id
  return a.id;
}

export function sortByName(a: User, b: User): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectUserId,
  sortComparer: sortByName,
});
```

### Metodi

#### `getInitialState` <a id="getinitialstate"></a>

```typescript
...
export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedUserId: null,
});

const userReducer = createReducer(initialState);
...
```

restituisce lo stato iniziale dell'entità, per impostare le proprietà aggiunte basta passarle nell'ob di configurazione. lo stato iniziale verra poi passato al funzione reducer

### Metodi della raccolta

questi metodi servono per operazioni sulle entità, su su uno o piu record alla volta. 



* `addOne`: Aggiungi un'entità alla raccolta
* `addMany`: Consente di aggiungere più entità alla raccolta
* `setAll`: Sostituisce la raccolta corrente con la raccolta fornita
* `setOne`: Consente di aggiungere o sostituire un'entità nella raccolta
* `removeOne`: Rimuove un'entità dalla raccolta
* `removeMany`: Rimuove più entità dalla raccolta, per ID o per predicato
* `removeAll`: Cancella tutta la raccolta di entità
* `updateOne`: Aggiorna un'entità nella raccolta. Supporta aggiornamenti parziali.
* `updateMany`: Aggiorna più entità nella raccolta. Supporta aggiornamenti parziali.
* `upsertOne`: Consente di aggiungere o aggiornare un'entità nella raccolta. Supporta aggiornamenti parziali.
* `upsertMany`: Consente di aggiungere o aggiornare più entità nella raccolta. Supporta aggiornamenti parziali.
* `map`: Aggiorna più entità nella raccolta definendo una funzione mappa, simile a `Array.map`

#### modifica dell'entità

i metodi `updateOne` e `updateMany` usano l'interfaccia `Update<T>`:

```typescript
interface UpdateStr<T> {
  id: string;
  changes: Partial<T>;
}

interface UpdateNum<T> {
  id: number;
  changes: Partial<T>;
}

type Update<T> = UpdateStr<T> | UpdateNum<T>;
```

{% hint style="info" %}
`Partial<T>`  trasforma tutte la proprietà dell'oggetto passato in opzionali, in questo modo possiamo passare un'oggetto con solo le proprietà che dobbiamo modificare
{% endhint %}

### i Selettori

Il metodo `getSelectors()`   restituito dall'adapter  fornisce le funzioni per la selezione di informazioni dall'entità.

nel reducer andiamo a recuperare tutti i metodi di selezione dell'entità

{% code title="user-reducer.ts" %}
```typescript
...
// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
 
// select the array of user ids
export const selectUserIds = selectIds;
 
// select the dictionary of user entities
export const selectUserEntities = selectEntities;
 
// select the array of users
export const selectAllUsers = selectAll;
 
// select the total user count
export const selectUserTotal = selectTotal;
```
{% endcode %}

e poi nei selectors gli importiamo, possiamo usarli cosi come sono oppure concatenarli con altri selettori

{% code title="user-selectors.ts" %}
```typescript
import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromUser from './user.reducer';

export interface State {
  users: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUser.reducer,
};

export const selectUserState = createFeatureSelector<fromUser.State>('users');

export const selectUserIds = createSelector(
  selectUserState,
  fromUser.selectUserIds // shorthand for usersState => fromUser.selectUserIds(usersState)
);
export const selectUserEntities = createSelector(
  selectUserState,
  fromUser.selectUserEntities
);
export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAllUsers
);
export const selectUserTotal = createSelector(
  selectUserState,
  fromUser.selectUserTotal
);
export const selectCurrentUserId = createSelector(
  selectUserState,
  fromUser.getSelectedUserId
);

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]
);
```
{% endcode %}

