import { Injectable } from "@angular/core";
import { Product } from "../../core/models/product/product";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    getProducts(): Product[] {
        return [
            {
                id: `${1}`,
                name: 'Apple',
                description: 'This is an apple', 
                price: 0.5,
                imageUrl: '' 
            },
            { 
                id: `${2}`,
                name: 'Orange',
                description: 'This is an orange', 
                price: 1,
                imageUrl: '' 
            },
            {
                id: `${3}`,
                name: 'Bread',
                description: 'This is a bread', 
                price: 1.12,
                imageUrl: ''
            }
        ];
    }
}