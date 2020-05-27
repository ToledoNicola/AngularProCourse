# i Tre principi

## **1. Singola fonte di verità**

Redux utilizza un solo **store** per tutto lo **stato** dell'applicazione. Poiché tutto lo stato risiede in un unico posto, Redux lo chiama  l'_unica fonte di verità_ .

```typescript
console.log(store.getState())

/* Prints
{ <-- store
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*/
```

## **2. Lo stato è di sola lettura**

L' unico modo per mutare lo stato è emettere un'azione, un oggetto che descriva ciò che è accaduto

Ciò significa che l'applicazione non può modificare direttamente lo stato. Al contrario, vengono inviate "**azioni**" per esprimere l'intenzione di cambiare lo stato nello store.

```typescript
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
})

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})
```

## **3. Le modifiche vengono apportate con Pure Functions**

Questi sono chiamate "**pure**" perché non fanno altro che restituire un valore basato sui loro parametri. Non hanno effetti collaterali in nessun'altra parte del sistema.

Un **reducer** accetta lo stato corrente come argomento e può modificare lo stato solo restituendo un nuovo stato:

Puoi iniziare con un singolo **reducer** e, man mano che la tua app cresce, suddividila in **reducers** più piccoli che gestiscono parti specifiche dell'albero dello stato

```typescript
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return {...todo, completed: true} // creo un nuovo oggetto
        }
        return todo
      })
    default:
      return state
  }
}

import { combineReducers, createStore } from 'redux'
const reducer = combineReducers({ visibilityFilter, todos })
const store = createStore(reducer)
```

{% hint style="info" %}
**Pure function descrive una funzione con le seguenti caratteristiche:**

* Non effettua chiamate di rete o al database .
* Il suo valore di ritorno dipende esclusivamente dai valori dei suoi parametri.
* I suoi argomenti dovrebbero essere considerati "immutabili", nel senso che non dovrebbero essere modificati.
* Chiamare una funzione pura con gli stessi argomenti restituirà sempre lo stesso valore.
{% endhint %}

