# Effects

In un'applicazione c'è anche la necessità di gestire azioni impure, ad esempio richieste AJAX, in NgRx si chiamano Effects.

i punti chiave sono:

* Gli effetti isolano gli effetti collaterali dai componenti, consentendo componenti più _puri_ che selezionano le azioni di stato e invio.
* Gli effetti sono servizi di lunga durata che ascoltano un osservabile di _ogni_ azione inviata dallo [Store](https://ngrx.io/guide/store) .
* Gli effetti filtrano quelle azioni in base al tipo di azione a cui sono interessati. Questo viene fatto usando un operatore.
* Gli effetti eseguono attività, che sono sincrone o asincrone e restituiscono una nuova azione.

## createEffect\(\)

ritorno di un'action diversa

```typescript
effectName$ = createEffect(
  () => this.actions$.pipe(
    ofType(FeatureActions.actionOne),
    map(() => FeatureActions.actionTwo())
  )
);
```

effect che non esegue il dispatch di un'action

```typescript
effectName$ = createEffect(
  () => this.actions$.pipe(
    ofType(FeatureActions.actionOne),
    tap(() => console.log('Action One Dispatched'))
  ),
  { dispatch: false }
  // FeatureActions.actionOne is not dispatched
);
```

{% hint style="warning" %}
è importante usare `dispatch:false` se non si ritorna un'action diversa perchè ogni action che viene restituita dallo stream dell' effect viene fatto il `dispatch` allo store, che quindi genera un loop perche si rientrerebbe nello stesso effect
{% endhint %}

