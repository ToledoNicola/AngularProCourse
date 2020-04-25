# OnPush

include il componente nella change detection se:

* l'input è mutato
* viene attivata manualmente
* evento dal template

la pipe `async` tiene traccia internamente della subscribe e per ogni nuovo valore esegue`markForCheck`

{% hint style="info" %}
#### la CD viene eseguita da Zone.js che intercetta l'evento asincrono e  markForCheck\(\)  non attiva la CD, marca il componente come 'dirty' e nel presente o prossimo ciclo di CD viene eseguito il rendering
{% endhint %}



{% embed url="https://stackoverflow.com/a/45396740" %}



