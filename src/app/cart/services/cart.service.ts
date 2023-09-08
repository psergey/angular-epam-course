import { inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LocalStorageService } from "src/app/core/services/local-storage.service";
import { CartItem } from "../models/cartItem";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private items: CartItem[] = [];
    private storage: LocalStorageService = inject(LocalStorageService);

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

        this.storage.setItem('cart-items', [...this.items]);
        this.itemsChangedSubject$.next([...this.items]);
    }

    removeItem(item: CartItem): void {
        this.items = this.items.filter(i => i.id !== item.id);
        this.storage.setItem('cart-items', [...this.items]);
        this.itemsChangedSubject$.next([...this.items]);
    }

    increaseQuantity(item: CartItem) {
        this.changeQuantity(item, 1);

        this.storage.setItem('cart-items', [...this.items]);
        this.itemsChangedSubject$.next([...this.items]);
    }
    
    decreaseQuantity(item: CartItem) {
        this.changeQuantity(item, -1);

        this.storage.setItem('cart-items', [...this.items]);
        this.itemsChangedSubject$.next([...this.items]);
    }

    clear(): void {
        this.items = [...this.items].splice(0);
        this.storage.setItem('cart-items', []);
        this.itemsChangedSubject$.next([]);
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

    get isEmpty(): boolean {
        return this.items.length == 0;
    }

    private changeQuantity(item: CartItem, count: number): void {
        const itemIndex = this.items.findIndex(i => i.id === item.id);
        const cartItem = this.items[itemIndex];

        var updatedItem = {
            ...cartItem,
            amount: cartItem.amount + count
        }

        this.items[itemIndex] = updatedItem;
    }
}