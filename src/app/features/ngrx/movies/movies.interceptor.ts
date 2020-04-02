import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

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
