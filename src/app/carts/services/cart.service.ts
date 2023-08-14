import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "../../core/models/product/product";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private items: Product[] = [];
    addProductSubject$ = new Subject<Product>();
    
    addToCart(product: Product) {
        this.addProductSubject$.next(product);
        this.items.push(product);
    }

    getItems() : Product[] {
        return [...this.items];
    }
}