# Concetti principali

lo stato è un semplice **oggetto**, redux ci da un modo organizzato per gestire questo oggetto

{% code title="todo state " %}
```typescript
{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```
{% endcode %}

l'unico modo per modificare lo stato è attraverso il `dispatch` di un' `action,`Un' action è un semplice oggetto JavaScript che **descrive cosa è successo.** 

Questo ****ci consente di avere una chiara comprensione di ciò che sta accadendo nell'app**,** se qualcosa è cambiato, sappiamo perché è cambiato.

{% code title="Actions" %}
```typescript
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```
{% endcode %}

Per legare insieme stato e azioni, scriviamo una funzione chiamata **`reducer`**. è solo una funzione che accetta lo **state** e **l'action** come argomenti e restituisce il successivo stato dell'app. 

{% hint style="info" %}
il**`reducer`** si comporta come il metodo **`reduce`** negli **`array`** , ma con lo **state**
{% endhint %}

in un'app complessa sarebbe difficile gestire tutti i casi in una sola funzione , quindi scriviamo funzioni più piccole che gestiscono parti dello stato:

{% code title="Reducers" %}
```typescript
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }])
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        action.index === index
          ? { text: todo.text, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}
```
{% endcode %}

ed alla fine scriviamo un'altro **reducer** che unisce i due reducer scritti prima nelle rispettive chiavi di stato

```typescript
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}
```

#### **l'idea principale è che descrivi come il tuo stato viene aggiornato nel tempo in risposta alle Action**

### **Quale reducer viene chiamato dopo il `dispatch`?**

Tutti . Il confronto tra riduttori e imbuti è ancora più evidente se si considera che ogni volta che viene inviata un'azione, tutti i riduttori verranno chiamati e avranno l'opportunità di aggiornare il _loro_ rispettivo stato:

![](https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-05.svg)

a ciascun riduttore viene passato solo il rispettivo stato, non l'intero stato.

