import { createFeatureSelector, createSelector } from "@ngrx/store";

import { CartState, cartStoreKey } from "./cart.reducer";

const cart = createFeatureSelector<CartState>(cartStoreKey);

export const getCart = createSelector(
    cart,
    state => [...state.items]
);

export const getCartTotal = createSelector(
    cart,
    state => state.items.reduce((total, item) => total + item.amount * item.price, 0)
);