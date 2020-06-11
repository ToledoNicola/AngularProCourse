# Il problema

## Comunicazione component-to-component

lo **stato è ovunque nelle applicazioni web** 

man mano che le applicazioni crescono diventa difficile gestirlo, andando incontro allo spaghetti code, perché ogni componente gestisce il suo stato

![](https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-01.svg)







> Per la comunicazione tra due componenti che non hanno una relazione genitore-figlio, è possibile impostare il proprio sistema di eventi globale. ... Il modello di  è uno dei modi possibili per organizzarlo

Qui è dove Redux entra in gioco. Redux offre una soluzione per archiviare tutto lo stato dell'applicazione in un unico posto, chiamato "**store**". I componenti quindi inviano le modifiche allo store, non direttamente ad altri componenti. I componenti che devono essere consapevoli dei cambiamenti di stato possono "sottoscriversi" allo store:

![](https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-02.svg)

Io store può essere pensato come un "intermediario" per tutti i cambiamenti di stato nell'applicazione. Con Redux coinvolto, i componenti non comunicano direttamente tra loro, ma piuttosto tutti i cambiamenti di stato devono passare attraverso la _singola fonte di verità_ , lo store.

![](https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-03.svg)

Con Redux, è chiaro che tutti i componenti ottengono il loro stato dallo store. 

È chiaro dove i componenti dovrebbero inviare i loro cambiamenti di stato - sempre lo store.

 Il componente che invia la modifica si preoccupa solo dell'invio della modifica allo store e non deve preoccuparsi degli altri componenti che sono interessati alle modifiche su quello stato.

