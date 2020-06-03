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

