import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CartItem } from "../models/cartItem";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private items: CartItem[] = [];
    itemsChangedSubject$ = new Subject<CartItem[]>();
    
    addItem(item: CartItem): void {
        const itemIndex = this.items.findIndex(i => i.id === item.id);
        const cartItem = this.items[itemIndex];

        if (cartItem === undefined) {
            this.items = this.items.concat(item);
        } else {
            const updatedItem = {
                ...cartItem,
                amount: cartItem.amount + 1,
            };

            this.items[itemIndex] = updatedItem;
        }

        this.itemsChangedSubject$.next([...this.items]);
    }

    removeItem(item: CartItem): void {
        this.items = this.items.filter(i => i.id !== item.id);
        this.itemsChangedSubject$.next([...this.items]);
    }

    getItems(): CartItem[] {
        return [...this.items];
    }

    get totalCost(): number {
        return this.items.reduce((total, item) => total + item.amount * item.price, 0);
    }

    get totalQuantity(): number {
        return this.items.length;
    }
}