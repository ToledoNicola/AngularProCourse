import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { NavigationComponent } from "./core/navigation/navigation.component";
import { NgrxFakeModule } from "./features/redux/ngrx-fake/ngrx-fake.module";
import { reducersFake } from "./store-fake";
import { NgrxModule } from "./store/ngrx.module";

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgrxFakeModule.forRoot(reducersFake),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgrxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
