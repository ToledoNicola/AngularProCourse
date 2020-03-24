import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./store";
import { StoreRouterConnectingModule, RouterState } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { EntityDataModule } from "@ngrx/data";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { NavigationComponent } from "./core/navigation/navigation.component";
import { NgrxFakeModule } from "./features/redux/ngrx-fake/ngrx-fake.module";
import { reducersFake } from "./store-fake";

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgrxFakeModule.forRoot(reducersFake),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
