# Multicasting

## Multicasting operators

e possibile trasformare un' ob cold in hot o warm attraverso uno di questi operatori che permettono di condividere i valori emessi dall'ob a piu observer a prescindere da sottoscrizioni attive \(comportamento hot\) oppure dopo la prima sottoscrizione \( comportamento warm\)

{% hint style="info" %}
come abbiamo detto all'[inizio](./#catena-di-operatori) gli operatori non trasformano l'ob sorgente **A** che rimane inalterato quindi se è cold rimane cold, mentre il nuovo ob **B** generato dall'operatore sara hot perche sotto il cofano questi oparatori utlizzano un subject che ricevera i dati dall'esterno in questo caso dall' ob sorgente e di conseguenza tutti gli observer che si sottoscriveranno a **B** riceveranno gli stessi dati dallo stesso stream \(multicast\)

quindi quando ci sottoscriviamo a **B**, ci stiamo sottoscrivendo al subject interno, non direttamente alla fonte.
{% endhint %}

### Multicast

prende un `Subject`e lo usa per condividere l'esecuzione del codice sorgente

Il multicast restituisce ciò che è noto come a `ConnectableObservable`, che ha un `connect()`metodo. Ha un semplice lavoro: si abbona alla fonte con l'oggetto fornito:

Il `connect()`metodo consente di controllare quando avviare l'esecuzione della fonte Osservabile. Una cosa importante da ricordare è che in questo caso, per annullare l'iscrizione alla fonte, è necessario annullare l' `connectable`iscrizione alla sottoscrizione:

#### `multicast(new Subject())`

Utilizza il Subject fornito come man-in-the-middle fra voi e l'Observable.

* Se arrivano sottoscrizioni mentre l'Observable deve ancora completare, li aggancia \(effetto: HOT\)
* Se arrivano sottoscrizioni dopo che l'Observable ha completato, perdono i valori \(effetto: HOT\)

{% hint style="info" %}
`multicast(new Subject())` equivale a [publish\(\)](multicasting.md#publish)
{% endhint %}

#### `multicast(() => new Subject())`

Utilizza la factory fornita per creare il man-in-the-middle fra voi e l'Observable.

* Se arrivano sottoscrizioni mentre l'Observable deve ancora completare, li aggancia \(effetto: HOT\)
* Se arrivano sottoscrizioni dopo che l'Observable ha completato, viene ricreato il subject \(effetto: COLD\) e l'Observable riparte.

{% hint style="info" %}
Questa PRECISA combinazione di operatori è esattamente equivalente all'operatore share\(\)
{% endhint %}

### RefCount

Quando utilizziamo l' `multicast()`operatore, siamo responsabili della chiamata `connect()`per avviare l'esecuzione osservabile della fonte. Inoltre, siamo anche responsabili di evitare perdite di memoria annullando la sottoscrizione manuale alla sottoscrizione collegabile.

L' `refCount`operatore si basa sul conteggio dei riferimenti; Guarda il numero di abbonati attuali. Se quel numero cambia da zero a uno, chiama `connect()`, vale a dire, si abbona alla fonte. Se quel numero torna a zero, annulla l'iscrizione.

quando si utilizza `refCount`, si ottiene un normale osservabile, anziché un `ConnectableObservable`.

```typescript
source.pipe(
  multicast(() => new Subject()),
  refCount()
);
```

{% hint style="info" %}
equivalente all'operatore [share\(\)](multicasting.md#share)
{% endhint %}

### Publish

### Share

