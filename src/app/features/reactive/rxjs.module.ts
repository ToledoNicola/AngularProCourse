import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { RxjsRoutingModule } from "./rxjs-routing.module";
import { RxjsComponent } from "./rxjs.component";
import { SearchComponent } from "./containers/search/search.component";
import { SharedModule } from "src/app/shared/shared.module";
import { DynamicQueryingComponent } from "./containers/dynamic-querying/dynamic-querying.component";
import { DataService } from "./services/data.service";

@NgModule({
  declarations: [RxjsComponent, SearchComponent, DynamicQueryingComponent],
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
