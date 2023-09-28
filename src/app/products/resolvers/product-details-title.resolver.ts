import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { catchError, of, switchMap, take } from "rxjs";

import { ProductsService } from "../services/products.service";
import { Product } from "../models/product";

export const productDetailsTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
    const defaultTitle: string = 'Shop';
    const service = inject(ProductsService);

    const id = route.paramMap.get('id');

    if (!id) {
        console.log('Unable to get header title - No id found')
        return of(`${defaultTitle} - Product Details`);
    }

    return service.getProduct(id!).pipe(
        switchMap((product: Product | undefined) => {
            console.log('Resolve header title');
            return product ? of(`${defaultTitle} - ${product.name}`) : of(`${defaultTitle} - Product Details`)
        }),
        take(1),
        catchError(() => {
            console.log('Unable to get header title - Error has occured')
            return of(`${defaultTitle} - Product Details`)
        })
    )
} 