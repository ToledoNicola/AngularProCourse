# Multicasting

## Multicasting operators

e possibile trasformare un' ob cold in hot o warm attraverso uno di questi operatori che permettono di condividere i valori emessi dall'ob a piu observer a prescindere da sottoscrizioni attive \(comportamento hot\) oppure dopo la prima sottoscrizione \( comportamento warm\)

{% hint style="info" %}
come abbiamo detto all'inizio gli operatori non trasformano l'ob sorgente che rimane inalterato quindi se è cold rimane cold, mentre il nuovo ob generato dall'operatore sara hot perche sotto il cofano questi oparatori utlizzano un subject che ricevera i dati dall'esterno in questo caso dall' ob sorgente e di conseguenza tutti gli observer che si sottoscriveranno al nuovo ob riceveranno gli stessi dati dallo stesso stream \(multicast\)
{% endhint %}

### refCount

### share

