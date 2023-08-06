import { Injectable } from "@angular/core";
import { Product } from "../../core/models/product/product";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    getItems() : Product[] {
        return [];
    }
}