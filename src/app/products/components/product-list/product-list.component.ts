import { Component, OnInit } from "@angular/core";
import { Product } from "../../../core/models/product/product";
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
        console.log(`Adding Product: ${JSON.stringify(item)}`);
        this.cartService.addToCart(item);
    }
}