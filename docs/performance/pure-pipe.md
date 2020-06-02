# Pure Pipe

## **Impure pipe**

This pipe produces side-effects. They affect the general global state of the app. When called with a certain input produces a different output.

## **pure pipe**

produce un output basato sull'input che è stato dato senza effetti collaterali. Le pipe pure eseguiranno la sua logica nel metodo di trasformazione ogni volta che l'input cambia se riceve un input uguale a prima che non ci sarà alcuna azione,

verrà valutato due volte al rendering iniziale, al successivo rendering, non verrà valutato.

Il problema riguarda il rendering iniziale, come possiamo ricordarlo in precedenza? Lo raggiungeremo attraverso la **memoizzazione** .

{% embed url="https://blog.bitsrc.io/angular-performance-optimizing-expression-re-evaluation-with-pure-pipes-ff8df36ed478" %}



