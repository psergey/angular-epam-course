import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";
import { ProductsService } from "../../services/products.service";
import { CartService } from "../../../carts/services/cart.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
  })
export class ProductListComponent implements OnInit
{
    products: Product[] = [];

    constructor(private productsService: ProductsService, private cartService: CartService) {
    }

    ngOnInit(): void {
        this.products = this.productsService.getProducts();
    }

    addProduct(item: Product): void {
        this.cartService.addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            amount: 1
        });
    }
}