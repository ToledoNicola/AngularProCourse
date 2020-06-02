# Memoization

esegue la funzione solo se il valore di ingrsso cambia poi salva il risultato

ed ogni volta che riceve in input quel valore non riesegue la funzione ma

restituisce il valore salvato prima per quell'input

## Lodash

usare la libreria lodash in particolare per angular la `lodash-es`  perchè applica il tree-shaking e di conseguenza pesera meno nel bunle finale

```typescript
npm install lodash-es --save
npm install @types/lodash-es --save-dev
```

```typescript
import { memoize } from "lodash-es";
```

