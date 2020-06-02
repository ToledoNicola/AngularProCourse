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



![](https://lh4.googleusercontent.com/5KdeGW4JDCe2nMnwaLKFYFSOjN5_mZlLPvFi2pSXncnBxwjZbxI9mSeXoXTalZialL-LzP4SOKkhES4Xgv6nbREABbyte9MwT3KoUXqPP1T58Bh1NAeBLC95kI8zrZBdLvBZfBWO9hY)



![](https://lh6.googleusercontent.com/63DH-zbEpP5Skx4qOBRDKnCg447egnLnJKCaHrLXuPmtkZzJmrgOYjs_5jJFL1M4mXt76bewL2EYRH8JqPjS36w13TU5GZTdGAWCNy5eFFsGMmbfrqNdTpe1W_DY-pRUOTxUtQmJ9jY)

