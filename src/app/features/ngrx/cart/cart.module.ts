import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CartComponent } from "./cart.component";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import * as fromCart from "./store/reducers/cart.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CartEffects } from "./store/effects/cart.effects";
import { SummaryComponent } from "./containers/summary/summary.component";

const routes: Routes = [{ path: "", component: CartComponent }];

@NgModule({
  declarations: [CartComponent, SummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
    EffectsModule.forFeature([CartEffects]),
  ],
  exports: [SummaryComponent],
})
export class CartModule {
  /**
   * aggiungere il forRoot() quando verra importato in tutti i moduli per il componente summary
   */
}
