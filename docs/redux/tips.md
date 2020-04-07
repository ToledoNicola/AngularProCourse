# Tips

## Input FormControl valueChange

se si utilizza il valueChange per emettere il nuovo valore fare attenzione quando andiamo a settare il valore\( se lo recuperiamo dallo store \) perche andrebbe a scatenare un nuovo valore e quindi un loop di actions è importante settare nelle configurazioni  :

```typescript
this.testo.setValue(value, { emitEvent: false });
```

in questo modo non scatena l'evento nel valueChange ed il timetravel sul redux dev tools funziona

