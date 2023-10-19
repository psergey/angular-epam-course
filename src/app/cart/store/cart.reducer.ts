import { createReducer, on } from "@ngrx/store";

import { CartItem } from "../models/cartItem";
import * as CartAsctions from "./cart.actions";

export const cartStoreKey = 'cart';

export interface CartState {
    items: ReadonlyArray<CartItem>
}

const intitialState: CartState = {
    items: [],
};

export const cartReducer = createReducer(
    intitialState,
    on(CartAsctions.addItem, (state, item) => addItem(state, item)),
    on(CartAsctions.removeItem, (state, item) => removeItem(state, item)),
    on(CartAsctions.increaseItemQuantities, (state, item) => changeQuantity(state, item, 1)),
    on(CartAsctions.decreaseItemQuantities, (state, item) => changeQuantity(state, item, -1)),
);

const addItem = (state: CartState, item: CartItem) : CartState => {
    const { items }  = state;
    const itemIndex = items.findIndex(i => i.id === item.id);
    const cartItem = items[itemIndex];

    if (!cartItem) {
        return {
            ...state,
            items: [...state.items, item]
        };
    } 

    return {
        ...state,
        items: state.items.map((o, index) => index == itemIndex ? changeItemQuantity(o, 1) : o)
    };
}

const removeItem = (state: CartState, item: CartItem) : CartState => {
    return {
        ...state,
        items: state.items.filter(o => o.id !== item.id)
    };
}

const changeQuantity = (state: CartState, item: CartItem, quantity: number) : CartState => {
    const { items }  = state;
    const itemIndex = items.findIndex(i => i.id === item.id);
    const cartItem = items[itemIndex];

    if (!cartItem) {
        return state;
    }

    return {
        ...state,
        items: state.items.map((o, index) => index == itemIndex ? changeItemQuantity(o, quantity) : o)
    };
}

const changeItemQuantity = (item: CartItem, count: number): CartItem => {
    return {...item, amount: item.amount + count};
}