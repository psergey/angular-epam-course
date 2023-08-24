import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../../models/product";

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
  })
export class ProductItemComponent
{
    @Input() product!: Product
    @Output() addProduct = new EventEmitter<Product>();

    onAddItem(): void {
        this.addProduct.emit(this.product);
    }
}
