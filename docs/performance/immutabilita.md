# Immutabilità

Common state action is to add or remove items from an array or to add or remove fields from an object. However, the standard operations are mutating the original object. Let’s see how we can apply them in an immutable way. Our goal is to create a new object, rather than changing the existing. For simplicity, we will be using [rest and spread operators](https://javascript.info/rest-parameters-spread-operator) introduced in ES6

**L'immutabilità è un modello di progettazione in cui qualcosa non può essere modificato dopo essere stato istanziato.** 

**Se vogliamo cambiare il valore di quella cosa, dobbiamo invece ricrearla con il nuovo valore.**

 **Alcuni tipi di JavaScript sono immutabili e alcuni sono mutabili, il che significa che il loro valore può cambiare senza doverlo ricreare.**  


**tipi JavaScript immutabili:**

* **Boolean**
* **Number**
* **String**
* **Symbol**
* **Null**
* **Undefined**

**tipi JavaScript mutabili:**

* **Object**
* **Array**
* **Function**

Array has several mutable operations - [push](https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript#push), [pop](https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript#pop), [splice](https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript#removal-and-inserting-of-items), [shift](https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript#shift), [unshift](https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript#unshift), [reverse](https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript#sort-and-reverse) and [sort](https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript#sort-and-reverse). Using them is usually causing side effects and bugs that are hard to track. That’s why it’s important to use an immutable way.

## operazioni su array immutabili

```typescript
const fruits = ['orange', 'apple', 'lemon'];
```

### Aggiunta

alla fine:

```typescript
const newFruits = [...fruits, 'banana']; // = ['orange', 'apple', 'lemon', 'banana']
```

all'inizio:

```typescript
const newFruits = ['banana', ...fruits]; // = ['banana', 'orange', 'apple', 'lemon']
```

### Rimozione

```typescript
const newFruits = fruits.filter(fruit => fruit !== 'apple'); // = ['orange', 'lemon']
```

### Modifica

```typescript
const newFruits = fruits.map(fruit => fruit + '-rossa'); // = ['orange-rossa', 'lemon-rossa']
```

## operazioni su oggetti immutabili



```typescript
const state = {
  selected: 'apple',
  quantity: 13,
  fruits: ['orange', 'apple', 'lemon', 'banana']
};
```

### Modifica ed Aggiunta

mutabile:

```typescript
state.selected = 'orange';
state.quantity = 5;
state.origin = 'imported from Spain';
```

immutabile:

```typescript
const newState = {
  ...state,
  selected: 'orange',
  quantity: 5,
  origin: 'imported from Spain'
};
```

### Rimozione

mutabile:

```typescript
delete state.quantity;
```

immutabile:

```typescript
const { quantity, ...newState } = state;
/* 
quantity = 13
newState = {
  selected: 'apple',
  fruits: ['orange', 'apple', 'lemon', 'banana']
}
*/
```

little trick provided by spread’s counterpart `rest`

This technique is called [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) as we are unpacking the original state object. We assign quantity key-value pair to constant `quantity` and assign rest of the object to `newState`.



{% embed url="https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript\#modify-andor-add-property" %}



