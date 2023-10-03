import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Route, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable, switchMap } from "rxjs";

import { CartService } from "../../../cart/services/cart.service";
import { Product } from "../../models/product";
import { ProductsService } from "../../services/products.service";
import { selectSelectedProductId } from "../../store/products.selectors";
import * as RouterActions from "src/app/core/store/router/router.actions";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

    product$!: Observable<Product>;

    private cartService: CartService = inject(CartService);
    private service: ProductsService = inject(ProductsService);
    private store: Store = inject(Store);
    //private route: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit() {
        // this.product$ = this.route.paramMap.pipe(
        //   switchMap((params: ParamMap) =>
        //     this.service.getProduct(params.get('id')!)));
    
      this.product$ = this.store.select(selectSelectedProductId)
        .pipe(
          switchMap(id => {
            console.log(id)
            return this.service.getProduct(id!);
          })
        );
    }

    onAddProduct(item: Product): void {
      this.cartService.addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        amount: 1
      })
    }

    onNavigateBack(): void {
      this.store.dispatch(RouterActions.back())
    }
}