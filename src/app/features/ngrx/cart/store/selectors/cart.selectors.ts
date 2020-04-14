import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCart from "../reducers/cart.reducer";

export const selectCartState = createFeatureSelector<fromCart.State>(
  fromCart.cartFeatureKey
);

export const selectItems = createSelector(selectCartState, fromCart.selectAll);

export const selectTotItems = createSelector(
  selectCartState,
  fromCart.selectTotal
);
