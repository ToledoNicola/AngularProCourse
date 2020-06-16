# Reactive Programming

> ### programmare in modo reattivo significa _reagire a degli eventi_

```typescript
var c=a+b;
faiQualcosa(c);
```

nella programmazione imperativa salvo ulteriori assegnazioni il valore `c` non cambia anche se `b` e `a` cambiano

nella programmazione reattiva il valore di `c` viene aggiornato ad ogni cambiamento di `b` o `a`

```typescript
const c$ = a$.combineLatest(b$,(a,b)=> a+b);
c$.subscribe(faiQualcosa);
```

in questo modo posso andare a cambiare lo stream a$ e b$ con qualsiasi altro stream basta che ritornano lo stesso tipo in questo caso dei numeri

quindi abbiamo maggiore flessibilita, perche vengono separati diventando piu facili da sostituire

{% embed url="https://www.youtube.com/watch?v=D7ImfM7\_mcs&list=PLVsnP2Uyf4H0k8H2Ymtav6N6zuZ0\_Nfv7&index=2&t=0s" %}



