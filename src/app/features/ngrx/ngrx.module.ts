import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgrxRoutingModule } from "./ngrx-routing.module";
import { NgrxComponent } from "./ngrx.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [NgrxComponent, NavbarComponent],
  imports: [CommonModule, NgrxRoutingModule],
})
export class NgrxModule {}
