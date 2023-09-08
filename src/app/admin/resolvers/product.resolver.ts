import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, Router } from "@angular/router";
import { delay, EMPTY, mergeMap, of } from "rxjs";

import { Product } from "../../products/models/product";
import { ProductsService } from "../../products/services/products.service";

export const productResolver: ResolveFn<Product> = (route: ActivatedRouteSnapshot) => {
    const productService: ProductsService = inject(ProductsService);
    const router: Router = inject(Router);
    const id = route.paramMap.get('id')!;

    return productService.getProduct(id).pipe(
        delay(1000),
        mergeMap(product => {
            if (product) {
                return of(product)
            }

            router.navigate(['/products']);
            return EMPTY;
        })
    )
}