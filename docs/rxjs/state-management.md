# State management

è possibile gestire uno stato con:

* BehaviorSubject
* Scan "alla Redux" con reducer e azioni

## BehaviorSubject

## Scan

```typescript
/**
     * Creazione dello store
     */

    const initialState = {
      counter: 0,
    };

    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case "increment":
          return { counter: state.counter + 1 };
        case "decrement":
          return { counter: state.counter - 1 };
      }
      return state;
    };
```



