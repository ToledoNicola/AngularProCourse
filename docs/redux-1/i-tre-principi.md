# i Tre principi

## **1. Singola fonte di verità**

Redux utilizza un solo **store** per tutto lo **stato** dell'applicazione. Poiché tutto lo stato risiede in un unico posto, Redux chiama questo l'_unica fonte di verità_ .

## **2. Lo stato è di sola lettura**

L' unico modo per mutare lo stato è emettere un'azione, un oggetto che descriva ciò che è accaduto

Ciò significa che l'applicazione non può modificare direttamente lo stato. Al contrario, vengono inviate "**azioni**" per esprimere l'intenzione di cambiare lo stato nello store.

## **3. Le modifiche vengono apportate con Pure Functions**



{% hint style="info" %}
**Pure function descrive una funzione con le seguenti caratteristiche:**

* Non effettua chiamate di rete o di database esterne.
* Il suo valore di ritorno dipende esclusivamente dai valori dei suoi parametri.
* I suoi argomenti dovrebbero essere considerati "immutabili", nel senso che non dovrebbero essere modificati.
* Chiamare una funzione pura con lo stesso set di argomenti restituirà sempre lo stesso valore.
{% endhint %}

