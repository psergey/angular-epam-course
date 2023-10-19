import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { selectProducts, selectSingleProduct } from "../store/products.selectors";
import * as ProductActions from '../store/products.actions';
import { Observable, tap } from "rxjs";
import { Product } from "../models/product";

@Injectable({
    providedIn: "root"
})
export class ProductsFacade {
    constructor(private store: Store) {
    }

    products$ = this.store.select(selectProducts);

    loadProducts() {
        this.store.dispatch(ProductActions.opened());
    }

    getProductDetails(): Observable<Product | undefined> {
        return this.store.select(selectSingleProduct)
            .pipe(tap(details => {
                if (!details) {
                    this.loadProducts();
                }
            }));
    }
}