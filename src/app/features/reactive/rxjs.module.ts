import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { RxjsRoutingModule } from "./rxjs-routing.module";
import { RxjsComponent } from "./rxjs.component";
import { SearchComponent } from "./containers/search/search.component";
import { SharedModule } from "src/app/shared/shared.module";
import { DataService } from "./services/data.service";
import { PlaygroundComponent } from "./playground/playground.component";
import { DynamicQueryingComponent } from "./projects/dynamic-querying/dynamic-querying.component";
import { ChefsComponent } from "./projects/chefs/chefs.component";
import { SubjectStoreComponent } from "./projects/subject-store/subject-store.component";
import { ScanStoreComponent } from "./projects/scan-store/scan-store.component";
import { BmiComponent } from "./projects/bmi/bmi.component";

@NgModule({
  declarations: [
    RxjsComponent,
    SearchComponent,
    DynamicQueryingComponent,
    PlaygroundComponent,
    ChefsComponent,
    SubjectStoreComponent,
    ScanStoreComponent,
    BmiComponent,
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [DataService],
})
export class RxjsModule {}
