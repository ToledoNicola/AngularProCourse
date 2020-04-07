# Lazy Load Module

## Preloading Strategy

invece di caricare un modulo quando l'utente clicca sulla rotta \(strategia di default\), che potrebbe causere problemi di ux perche il caricamento è piu lento, è possibile precaricare tutti i moduli in modo da averli pronti quando si clicca sulla rotta:

```typescript
@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  ...
```

### **Custom Strategy**

Creando un service che estende l'interfaccia `PreloadingStrategy`  per esempio:

```typescript
{
  path: 'module-8',
  loadChildren: () => import('./lazymodule8/lazymodule8.module').then(m => m.Lazymodule8Module),
  data: { preload: true } // preload flag
}
```

applichiamo a tutte le rotte che vogliamo pre-caricare l'oggetto con `preload:true`

```typescript
export class MyPreloadingStrategyService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      return load();
    } else {
      return of(null);
    }
  }

}
```

nel service controlliamo le rotte e se contiene il `preload:true` allora lo pre-carichiamo altrimenti no

```typescript
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: MyPreloadingStrategyService // il nostro preloading service 
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
```

ed infine passiamo il service appena creato come preloading strategy

### **ngx-quiklink**

questa libreria creata da google ci permetti di pre-caricare tutte le rotte che trova nella pagina attiva

```bash
npm install --save ngx-quicklink
```

```typescript
import {QuicklinkStrategy, QuicklinkModule} from 'ngx-quicklink';
…

@NgModule({
  …
  imports: [
    …
    QuicklinkModule,
    RouterModule.forRoot([…], {
      preloadingStrategy: QuicklinkStrategy
    })
  ],
  …
})
export class AppModule {}
```

e se abbiamo piu moduli lazy allora dobbiamo spostare il modulo `QuicklinkModule` in un modulo shared 

```typescript
import { QuicklinkModule } from 'ngx-quicklink';
…

@NgModule({
  …
  imports: [
    QuicklinkModule
  ],
  exports: [
    QuicklinkModule
  ],
  …
})
export class SharedModule {}
```

e importarlo in tutti i moduli lazy cosi

```typescript
import { SharedModule } from '@app/shared/shared.module';
…

@NgModule({
  …
  imports: [
      SharedModule
  ],
  …
});
```

