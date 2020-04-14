/**
 * facade service
 * serve per:
 * 1)raggruppare le interazioni con lo store
 * 2)per creare le api per i moduli esterni
 *
 */
import { Injectable } from "@angular/core";
import { CartModule } from "../cart.module";
import { Store } from "@ngrx/store";
import * as CartActions from "../store/actions/cart.actions";
import * as CartSelectors from "../store/selectors/cart.selectors";

@Injectable({
  providedIn: CartModule,
})
export class CartService {
  items$ = this.store.select(CartSelectors.selectItems);
  totalItems$ = this.store.select(CartSelectors.selectTotItems);

  constructor(private store: Store<{}>) {}

  fetchItems() {
    this.store.dispatch(CartActions.loadItems());
  }
}
