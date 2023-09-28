import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EMPTY, map, Observable, of, switchMap } from "rxjs";

import { Product } from "../models/product";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private httpClient: HttpClient = inject(HttpClient);

    private products: Product[] = [];

    getProducts(): Observable<Product[]> {
        //return of(this.products)
        return this.httpClient.get<Product[]>('http://localhost:3000/products')
    }

    getProduct(id: NonNullable<Product['id']> | string): Observable<Product> {
        // return this.getProducts().pipe(
        //     switchMap(products => {
        //         const product = products.find(item => item.id === id);
        //         return product ? of(product) : EMPTY;
        //     })
        // )
        return this.httpClient.get<Product>('http://localhost:3000/products/' + id)
    }

    addProduct(product: Product): Observable<object> {
        return this.httpClient.post('http://localhost:3000/products/', product);
    }

    updateProduct(product: Product): Observable<object> {
        // const i = this.products.findIndex(p => p.id === product.id);
        // if (i > -1) {
        //     this.products.splice(i, 1, product);
        // }
        return this.httpClient.put('http://localhost:3000/products/' + product.id, product);
    }
}