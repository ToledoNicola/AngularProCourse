import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { NgrxFakeModule } from "./features/redux/ngrx-fake/ngrx-fake.module";
import { reducersFake } from "./store-fake";
import { NgrxModule } from "./store/ngrx.module";
import { AuthModule } from "./core/auth/auth.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgrxFakeModule.forRoot(reducersFake),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgrxModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
