# Interceptor

permette di intercettare le chiamate http e prima di eseguirle poterla clonare e modificare

utile ad esempio per attaccare token di autenticazione e/o baseUrl

```typescript
@Injectable()
export class MoviesInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const movieReq = request.clone({
      url: environment.moviedb.baseUrl + request.url,
      setHeaders: {
        Authorization: `Bearer ${environment.moviedb.access_token}`,
        "Content-Type": "application/json;charset=utf-8"
      }
    });
    return next.handle(movieReq);
  }
}

```

da inserire nei provider del modulo app se vogliamo che sia globale oppure nel modulo feature se vogliamo applicarlo solo per quel modulo

```typescript
...
providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MoviesInterceptor,
      multi: true // aggiungo un'altra classe allo stesso token non sovrascrivo
    }
  ]
...
```

{% hint style="warning" %}
Ricordarsi di importare il modulo `HttpClientModule` in app.module e/o nei moduli feature \(per creare una nuova istanza dei provider\) dove vogliamo sovrascrivere altrimenti recupera quello globale se c'è oppure nessuno
{% endhint %}

