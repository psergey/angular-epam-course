import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Product } from "../../models/product";
//import { ProductsService } from "../../services/products.service";
import { CartService } from "../../../cart/services/cart.service";
import { selectProducts } from "../../store/products.selectors";
import * as ProductActions from '../../store/products.actions';
import * as CartActions from "../../../cart/store/cart.actions";
import { ProductsFacade } from "../../services/products.facade";
import { CartFacade } from "src/app/cart/services/cart.facade";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
  })
export class ProductListComponent implements OnInit
{
    //readonly products$: Observable<Product[]> = this.store.select(selectProducts);
    readonly products$: Observable<Product[]> = this.productsFacade.products$;

    // constructor(private productsService: ProductsService, private cartService: CartService) {
    // }

    constructor(private productsFacade: ProductsFacade,  private cartFacade: CartFacade) {
    }

    ngOnInit(): void {
        this.productsFacade.loadProducts();
        //this.store.dispatch(ProductActions.opened());
        //this.products$ = this.productsService.getProducts();
    }

    addProduct(item: Product): void {
        this.cartFacade.addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            amount: 1
        });
        // this.store.dispatch(CartActions.addItem({
        //     id: item.id,
        //     name: item.name,
        //     price: item.price,
        //     amount: 1
        // }));

        // this.cartService.addItem({
        //     id: item.id,
        //     name: item.name,
        //     price: item.price,
        //     amount: 1
        // });
    }
}