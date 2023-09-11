import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Route, Router } from "@angular/router";
import { map, Observable, switchMap } from "rxjs";

import { CartService } from "../../../cart/services/cart.service";
import { Product } from "../../models/product";
import { ProductsService } from "../../services/products.service";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

    product$!: Observable<Product>;

    private cartService: CartService = inject(CartService);
    private service: ProductsService = inject(ProductsService);
    private route: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit() {
        this.product$ = this.route.paramMap.pipe(
          switchMap((params: ParamMap) =>
            this.service.getProducts().pipe(
                map((products: Product[]) => products.find(item => item.id === params.get('id'))!)))
        );
    }

    onAddProduct(item: Product) {
      this.cartService.addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        amount: 1
      })
    }
}