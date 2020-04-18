# Scheduler

gli scheduler permettonon di modificare il comportamento della **subscribe** o **dell'observer** con **`subscribeOn`**  e   **`observeOn`**  

ad esempio quando eseguimo la subscription di un'observable avviene in modo sincrono , il metodo subscribe viene eseguito immediatamente mentre con  **`subscribeOn`**  e lo schedular `asyncScheduler`   possiamo dire dopo quanto deve essere eseguito il metodo `subscribe()`    in questo modo diventa asincrono

molti operatori che lavorano sul tempo utilizzano come schedular di default `asyncScheduler`  ma è possibile modificarlo, in questo caso viene applicato all'obserevr quindi quando \(in quale contesto\) devono essere inviate le notififiche

altri operatori come  `cache`, `combineLatest`, `concat`, `expand`, `merge`, `publishReplay`, `startWith`. usano come default lo schedular `queueScheduler`  per gestire la coda di emissione dei valori

