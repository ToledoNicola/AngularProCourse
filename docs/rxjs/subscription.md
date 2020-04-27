# 📝Subscription

Rappresenta il **contratto** tra l'observer e l'observable, è l'unico modo per terminare l'observable prima del tempo dall'esterno 

```typescript
const subscription = ob$.subscribe(observer)
subscription.unsubscribe() // termino esecuzione di ob$
```

