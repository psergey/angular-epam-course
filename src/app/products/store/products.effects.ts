import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";

import { ProductsService } from "../services/products.service";
import * as fromProducts from "./products.actions";

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductsService) {
    }
    
    loadProducts$ = createEffect(() => 
        this.actions$.pipe(
            ofType(fromProducts.opened),
            exhaustMap(() => 
                this.productService.getProducts()
                    .pipe(
                        map(products => 
                            fromProducts.productsLoadedSuccess({ products })
                        ),
                        catchError(error => 
                            of(fromProducts.productsLoadedFail({ error: 'Unable to load products' }))
                        )
                    )
                )
            )
        );
}