import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgrxRoutingModule } from "./ngrx-routing.module";
import { NgrxComponent } from "./ngrx.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CartModule } from "./cart/cart.module";

@NgModule({
  declarations: [NgrxComponent, NavbarComponent],
  imports: [CommonModule, NgrxRoutingModule, CartModule],
})
export class NgrxModule {}
