import { Action, createReducer, on } from "@ngrx/store";
import * as CartActions from "../actions/cart.actions";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Item } from "../../models/item";

export const cartFeatureKey = "cart";
const adapter = createEntityAdapter<Item>();

export interface State extends EntityState<Item> {}

export const initialState: State = adapter.getInitialState();

const cartReducer = createReducer(
  initialState,

  on(CartActions.loadItems, (state) => state),
  on(CartActions.loadItemsSuccess, (state, action) => state),
  on(CartActions.loadItemsFailure, (state, action) => state)
);

export function reducer(state: State | undefined, action: Action) {
  return cartReducer(state, action);
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = adapter.getSelectors();
