import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    getProducts(): Observable<Product[]> {
        return of([
            {
                id: `${1}`,
                name: 'Nintendo Switch OLED White',
                description: 'This is an apple', 
                price: 0.5,
                inStock: true,
                imageUrl: 'https://content1.rozetka.com.ua/goods/images/big/244514262.jpg' 
            },
            { 
                id: `${2}`,
                name: 'TP-Link Archer C64',
                description: 'This is an orange', 
                price: 1,
                inStock: false,
                imageUrl: 'https://content1.rozetka.com.ua/goods/images/big/191429256.jpg' 
            },
            {
                id: `${3}`,
                name: 'Valve Steam Deck 256 GB',
                description: 'This is a bread', 
                price: 934,
                inStock: true,
                imageUrl: 'https://content.rozetka.com.ua/goods/images/big/322355780.jpg'
            }
        ]);
    }
}