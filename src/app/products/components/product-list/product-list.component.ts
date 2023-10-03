import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Product } from "../../models/product";
//import { ProductsService } from "../../services/products.service";
import { CartService } from "../../../cart/services/cart.service";
import { selectProducts } from "../../store/products.selectors";
import * as ProductActions from '../../store/products.actions';
import * as CartActions from "../../../cart/store/cart.actions";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
  })
export class ProductListComponent implements OnInit
{
    readonly products$: Observable<Product[]> = this.store.select(selectProducts);

    // constructor(private productsService: ProductsService, private cartService: CartService) {
    // }

    constructor(private store: Store,  private cartService: CartService) {
    }

    ngOnInit(): void {
        this.store.dispatch(ProductActions.opened());
        //this.products$ = this.productsService.getProducts();
    }

    addProduct(item: Product): void {
        this.store.dispatch(CartActions.addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            amount: 1
        }));

        // this.cartService.addItem({
        //     id: item.id,
        //     name: item.name,
        //     price: item.price,
        //     amount: 1
        // });
    }
}