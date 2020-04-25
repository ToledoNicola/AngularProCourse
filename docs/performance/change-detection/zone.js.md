# Zone.js

{% hint style="warning" %}
Contrary to popular belief, zones are not part of the change detection mechanism in Angular. In fact, [Angular can work without them](https://indepth.dev/do-you-still-think-that-ngzone-zone-js-is-required-for-change-detection-in-angular/). 
{% endhint %}

The library simply provides a way to intercept async events, like **`setInterval`**, and notify Angular about them. Based on that notification, Angular runs change detection.



![zone all&apos;interno di una pagina web](https://admin.indepth.dev/content/images/2020/02/33.png)

all'interno di una pagina web possono esserci piu zone angular usa `NgZone` quindi angular attivera la **change detection** solo se viene notificato dalla `NgZone` e **non dalle altre zone**

è possibile eseguire codice fuori dalla zone con l'api **`runOutsideAngular`** del service **`NgZone`**

```typescript
export class AppComponent {
    _time;
    get time() {
        return this._time;
    }

    constructor(zone: NgZone) {
        this._time = Date.now();

        zone.runOutsideAngular(() => {
            setInterval(() => {
                this._time = Date.now()
            }, 1);
        });
    }
}
```

in questo caso il `setInterval()`  non  attivera la CD quindi `time` rimane uguale mentre \_time viene comunque aggiornato e sara visibile nel template nella prossima CD



## Zone-less

Zone.js attiva la CD su tutta l'applicazione e riesegue i componenti che sono markDirty?

possiamo attivare la CD su tutta l'applicazione manualmente cosi:

```typescript
constructor(private appRef: ApplicationRef) {} 

someMethod() {
  this.appRef.tick();
}
```

ma possiamo attivare la CD _**solo per un componente ed i sui figli**_  ad es:

```typescript
constructor(private cdRef: ChangeDetectorRef) {}    

someMethod() {
  this.cdRef.detectChanges();
}
```

in questo modo non utilizziamo piu Zone.js \(ZONE-LESS\) ed eseguiamo manualmente CD sui componenti che vogliamo

**ngrx offre questa possibilita con ngrx/components**

{% embed url="https://stackoverflow.com/questions/57806184/implementing-a-zonejs-less-angular-8-project" %}

{% embed url="https://indepth.dev/a-gentle-introduction-into-change-detection-in-angular/" %}

{% embed url="https://blog.thoughtram.io/angular/2016/01/22/understanding-zones.html" %}

{% embed url="https://medium.com/better-programming/zone-js-for-angular-devs-573d89bbb890" %}



