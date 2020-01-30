import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { RxjsRoutingModule } from "./rxjs-routing.module";
import { RxjsComponent } from "./rxjs.component";
import { InputTextComponent } from "./components/input-text/input-text.component";
import { SearchComponent } from "./containers/search/search.component";

@NgModule({
  declarations: [RxjsComponent, InputTextComponent, SearchComponent],
  imports: [CommonModule, RxjsRoutingModule, ReactiveFormsModule, FormsModule]
})
export class RxjsModule {}
