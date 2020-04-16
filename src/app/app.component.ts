import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./store";
import { isLogged } from "./core/auth/store/auth.selectors";

@Component({
  selector: "app-root",
  template: ` <router-outlet> </router-outlet> `,
  styles: [],
})
export class AppComponent {}
