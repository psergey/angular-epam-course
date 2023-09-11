import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { EMPTY, map, Observable, of, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private products = [
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
    ];

    getProducts(): Observable<Product[]> {
        return of(this.products);
    }

    getProduct(id: NonNullable<Product['id']> | string): Observable<Product> {
        return this.getProducts().pipe(
            switchMap(products => {
                const product = products.find(item => item.id === id);
                return product ? of(product) : EMPTY;
            })
        )
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    updateProduct(product: Product): void {
        const i = this.products.findIndex(p => p.id === product.id);
        if (i > -1) {
            this.products.splice(i, 1, product);
        }
    }
}