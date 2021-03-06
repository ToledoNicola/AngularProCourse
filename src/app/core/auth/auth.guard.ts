import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanLoad,
  Route,
  UrlSegment
} from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import { isLogged } from "./store/auth.selectors";
import { map, tap } from "rxjs/operators";
import { State } from "./store/auth.reducer";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private store: Store<State>, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(isLogged).pipe(
      map(isLogged => {
        if (!isLogged) {
          return this.router.parseUrl("login");
        }
        return isLogged;
      })
    );
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(isLogged).pipe(
      map(isLogged => {
        if (!isLogged) {
          return this.router.parseUrl("login");
        }
        return isLogged;
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store
      .select(isLogged)
      .pipe(tap(() => this.router.navigate(["login"])));
  }
}
