import { createAction, props } from "@ngrx/store";

import { CartItem } from "../models/cartItem";

export const addItem = createAction('[Cart Page] Add Item To Cart', props<CartItem>());

export const removeItem = createAction('[Cart Page] Remove Item From Cart', props<CartItem>());

export const increaseItemQuantities = createAction('[Cart Page] Increase Item Quantities', props<CartItem>());

export const decreaseItemQuantities = createAction('[Cart Page] Decrease Item Quantities', props<CartItem>());