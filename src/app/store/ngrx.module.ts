import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule, RouterState } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { EntityDataModule } from "@ngrx/data";
import { reducers, metaReducers } from ".";
import { environment } from "src/environments/environment";

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true, // controlla che non venga mutato lo store andandolo a cambiare direttamente
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true
      }
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: "router", // nome all'intereno dello store
      routerState: RouterState.Minimal
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}) // importare anche HttpClientModule altrimenti da errore
  ]
})
export class NgrxModule {}
