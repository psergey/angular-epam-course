import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { CartItem } from "../models/cartItem";
import { getCart, getCartTotal } from "../store/cart.selector";
import * as CartActions from "../store/cart.actions";

@Injectable({
    providedIn: "root"
})
export class CartFacade {

    cart$: Observable<CartItem[]> = this.store.select(getCart);
    cartTotal$: Observable<number> = this.store.select(getCartTotal);

    addItem(item: CartItem): void {
        this.store.dispatch(CartActions.addItem(item));
    }

    increaseItemQuantities(item: CartItem): void {
        this.store.dispatch(CartActions.increaseItemQuantities(item));
    }

    decreaseItemQuantities(item: CartItem): void {
        this.store.dispatch(CartActions.decreaseItemQuantities(item));
    }

    removeItem(item: CartItem): void {
        this.store.dispatch(CartActions.removeItem(item));
    }

    constructor(private store: Store) {
    }
}